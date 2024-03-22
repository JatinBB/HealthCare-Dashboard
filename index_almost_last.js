// const express = require('express')
// const mongoose  = require('mongoose')
// const cors = require('cors')
// const User = require('./model/Patient')
// // const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 5500;
// // const port = 3200
// // const app = express()
// app.use(cors())
// app.use(express.json());
// app.use(bodyParser.json()); // For parsing application/json



// // Middleware
// app.use(bodyParser.json());
// app.use(express.static('.')); // Serve static files from the current directory

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/loginDemo')
//     .then(() => console.log('connection is successful'))
//     .catch((e) => console.log(e, 'connection falied'))


// // Define a schema and model for User
// app.get('/',(req,res)=>{
//     res.send('<h1>hello</h1>')
// })
// // Route to get all users
// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });


// // Route to handle POST request
// app.post('/login', async (req, res) => {
//     // const { username, password } = req.body;
//     console.log(req.body);
//     const username=req.body.formData.username;
//     const password=req.body.formData.password;
//     console.log(username);
//     // For simplicity, we're directly saving without checking if the user already exists
//     const newUser = new User({ username, password });
//     await newUser.save();
//     console.log('newUser',newUser);

//     res.json({ message: 'User created successfully', user: newUser });
   
// });

// app.listen(port, () => {
//     console.log(`Server is running${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Patient = require('./model/Patient'); // Import the Patient model

const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/patientDetailsDB')
  .then(() => console.log('MongoDB connection is successful'))
  .catch((e) => console.log(e, 'MongoDB connection failed'));

// Route to add a new patient
app.post('/add-patient', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: 'Patient added successfully', patient });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get all patients
app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

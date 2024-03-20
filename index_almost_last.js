const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const User = require('./model/Users')
// const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;
// const port = 3200
// const app = express()
app.use(cors())
app.use(express.json());
app.use(bodyParser.json()); // For parsing application/json



// Middleware
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files from the current directory

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/loginDemo')
    .then(() => console.log('connection is successful'))
    .catch((e) => console.log(e, 'connection falied'))


// Define a schema and model for User
app.get('/',(req,res)=>{
    res.send('<h1>hello</h1>')
})
// Route to get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Route to handle POST request
app.post('/login', async (req, res) => {
    // const { username, password } = req.body;
    console.log(req.body);
    const username=req.body.formData.username;
    const password=req.body.formData.password;
    console.log(username);
    // For simplicity, we're directly saving without checking if the user already exists
    const newUser = new User({ username, password });
    await newUser.save();
    console.log('newUser',newUser);

    res.json({ message: 'User created successfully', user: newUser });
   
});

app.listen(port, () => {
    console.log(`Server is running${port}`);
});

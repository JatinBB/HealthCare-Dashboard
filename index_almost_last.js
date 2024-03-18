// const express = require('express')
// const mongoose  = require('mongoose')
// const cors = require('cors')
// const UserModel = require('./model/Users')
// const port = 3200
// const app = express()
// app.use(cors())
// app.use(express.json());

// mongoose.connect(
//     "mongodb+srv://jatinb2225:3xAqxNmcOynYK3ki@cluster1.cpjh2ib.mongodb.net/?retryWrites=true&w=majority"
//     )
// mongoose.connect('mongodb://127.0.0.1:27017/hackdb')
//     .then(() => console.log('connection is successful'))
//     .catch((e) => console.log(e, 'connection falied'))

//     app.get("/",(req, res) =>{
//         res.send("<h1>Hello</h1>")
//         })
//     app.get("/getUsers",(req, res) =>{
//         UserModel.find({}).then(function(users){
//             res.json(users)
//         }).catch(function(err){
//             res.json(err)
//         })
//     })

//     app.post('/login', async (req, res) => {
//         const { username, password } = req.body;
    
//         // For simplicity, we're directly saving without checking if the user already exists
//         const newUser = new User({ username, password });
//         await newUser.save();
    
//         res.json({ message: 'User created successfully', user: newUser });
//     });
// app.listen(port, ()=>{
//     console.log(`Server is Running${port}`)
// })

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files from the current directory

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/loginDemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a schema and model for User
const userSchema = new mongoose.Schema({
    username: String,
    password: String, // Note: In production, passwords should be hashed!
});

const User = mongoose.model('Users', userSchema);

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
    const { username, password } = req.body;

    // For simplicity, we're directly saving without checking if the user already exists
    const newUser = new User({ username, password });
    await newUser.save();

    res.json({ message: 'User created successfully', user: newUser });
});

app.listen(port, () => {
    console.log(`Server is running${port}`);
});

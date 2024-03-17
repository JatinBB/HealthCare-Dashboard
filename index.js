const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const UserModel = require('./model/Users')

const app = express()
app.use(cors())
app.use(express.json());

mongoose.connect(
    "mongodb+srv://jatinb2225:3xAqxNmcOynYK3ki@cluster1.cpjh2ib.mongodb.net/?retryWrites=true&w=majority"
    )

    app.get("/getUsers",(req, res) =>{
        UserModel.find({}).then(function(users){
            res.json(users)
        }).catch(function(err){
            res.json(err)
        })
    })

    app.post("/createUser", async (req, res)=>{
        const user = req.body;
        const newUser = new UserModel(user);
        await newUser.save();
        res.json(user);
    })


app.listen(27107, ()=>{
    console.log("Server is Running")
})
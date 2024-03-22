// const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema({
//     name :{
//         type: String,
//         required: true
//     },
//     password :{
//         type: String,
//         required: true  
//     }
// })


// const UserModel = mongoose.model("users", UserSchema)

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     password: { type: String, required: true },

// });

// const User = mongoose.model('users', userSchema);

// module.exports = User;


// model/Patient.js

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhaar: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  other_gender: { type: String },
  caste: { type: String, required: true },
  blood_type: { type: String, required: true },
  medical_history: { type: String },
  medical_history_details: { type: String },
  prescription: { type: String, required: true }
});

module.exports = mongoose.model('Patient', patientSchema);

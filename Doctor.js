// model/Doctor.js

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  specialist: { type: String, required: true },
  otherSpecialist: { type: String },
  doctorLicenseNo: { type: String, required: true },
  currentlyWorkingIn: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true } // Consider hashing passwords
});

module.exports = mongoose.model('Doctor', doctorSchema);

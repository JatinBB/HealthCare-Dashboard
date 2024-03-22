const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Patient = require('./model/Patient'); // Import the Patient model
const Doctor = require('./model/Doctor'); // Import the Doctor model

const app = express();
const port = 4500;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/doctorDetailsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection is successful'))
  .catch((e) => console.log(e, 'MongoDB connection failed'));

// Route to add a new doctor
app.post('/add-doctor', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


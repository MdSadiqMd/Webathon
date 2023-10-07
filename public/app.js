const express = require('express');
const mongoose = require('mongoose');
const Data = require('./dataModel');

const app = express();
const port = 3000;

// MongoDB Atlas connection URI (replace with your own)
const mongoURI = 'mongodb+srv://MdSadiqMd:Millionaire4950@cluster0.0l8s00u.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

// Middleware to parse JSON data in POST requests
app.use(express.json());

// Middleware to serve static files (e.g., HTML)
app.use(express.static('public'));

// Define a route to fetch data from MongoDB at the /request endpoint
app.get('/request', (req, res) => {
  // Query the MongoDB collection to fetch data
  Data.find({})
    .then(data => {
      // Convert the data to string format
      const stringData = JSON.stringify(data);

      // Send the data as a JSON response
      res.status(200).json(stringData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error fetching data from MongoDB');
    });
});

// Define a route to fetch data from MongoDB at the /allotment endpoint
app.get('/allotment', (req, res) => {
  // Query the MongoDB collection to fetch data
  Data.find({})
    .then(data => {
      // Convert the data to string format
      const stringData = JSON.stringify(data);

      // Send the data as a JSON response
      res.status(200).json(stringData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error fetching data from MongoDB');
    });
});

// POST request to save data at the /request endpoint
app.post('/request', (req, res) => {
  // Assuming you receive data in JSON format in the request body
  const { Date, 'Room.No': RoomNo, Request_Type, Timings, Status } = req.body;

  // Create a new Data document based on the received data
  const newData = new Data({
    Date,
    'Room.No': RoomNo,
    Request_Type,
    Timings,
    Status,
  });

  console.log('Received POST request for /request:', newData);

  // Save the new data document to MongoDB
  newData.save()
    .then(() => {
      console.log('Data added successfully to /request');
      res.status(201).send('Data added successfully'); // Respond with a success message
    })
    .catch(err => {
      console.error('Error adding data to MongoDB for /request:', err);
      res.status(500).send('Error adding data to MongoDB'); // Handle errors
    });
});

// POST request to save data at the /allotment endpoint
app.post('/allotment', (req, res) => {
  // Assuming you receive data in JSON format in the request body
  const { date, value, time } = req.body;

  // Create a new Data document based on the received data
  const newData = new Data({
    date,
    value,
    time,
  });

  // Save the new data document to MongoDB
  newData.save()
    .then(() => {
      res.status(201).send('Data added successfully'); // Respond with a success message
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error adding data to MongoDB'); // Handle errors
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

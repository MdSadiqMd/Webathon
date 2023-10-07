const express = require('express');
const mongoose = require('mongoose');
const Data=require('./dataModel')

const app = express();
const port = 3000;

// MongoDB Atlas connection URI (replace with your own)
const mongoURI = 'mongodb+srv://MdSadiqMd:Millionaire4950@cluster0.0l8s00u.mongodb.net/';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

// Middleware to serve static files (e.g., HTML)
app.use(express.static('public'));

// Define a route to fetch data from MongoDB
app.get('/allotment', (req, res) => {
  // Query the MongoDB collection to fetch data
  Data.find({})
  .then(data => {
    // Generate the HTML table rows based on the retrieved data
    const tbodyContent = data.map(item => `
      <tr>
        <td>${item.date}</td>
        <td>${item.value}</td>
        <td>${item.time}</td>
      </tr>
    `).join('');

    // Send the HTML response with the dynamically generated <tbody> content
    const htmlResponse = `<tbody>${tbodyContent}</tbody>`;
    res.send(htmlResponse);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Error fetching data from MongoDB');
  });

});

app.get('/request', (req, res) => {
  // Query the MongoDB collection to fetch data
  Data.find({}, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching data from MongoDB');
      return;
    }

    // Generate the HTML table rows based on the retrieved data
    const tbodyContent = data.map(item => `
      <tr>
        <td>${item.date}</td>
        <td>${item.value}</td>
        <td>${item.time}</td>
      </tr>
    `).join('');

    // Send the HTML response with the dynamically generated <tbody> content
    const htmlResponse = `<tbody>${tbodyContent}</tbody>`;
    res.send(htmlResponse);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


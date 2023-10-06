const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB (Replace '<your-mongodb-connection-url>' with your actual MongoDB connection URL)
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Mongoose Schema and Model (User Schema and Model)
const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  department: String,
  designation: String,
  totalInvisilations: Number,
  takenInvisilations: Number,
  toBeTakenInvisilations: Number,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// API routes
// Fetch all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Create a new user
app.post('/api/users', async (req, res) => {
  const {
    name,
    gender,
    department,
    designation,
    totalInvisilations,
    takenInvisilations,
    toBeTakenInvisilations,
  } = req.body;

  try {
    const newUser = new User({
      name,
      gender,
      department,
      designation,
      totalInvisilations,
      takenInvisilations,
      toBeTakenInvisilations,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

// Load environment variables from a .env file or process.env

require('dotenv').config();

// Import your routes here
const adminRoutes = require('./routes/adminRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const facultyRoutes = require('./routes/facultyRoutes');

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Import and configure Passport for user authentication
const authentication = require('./utils/authentication');
passport.use(authentication);
passport.serializeUser(authentication.serializeUser);
passport.deserializeUser(authentication.deserializeUser);

// Routes
app.use('/admin', adminRoutes);
app.use('/department', departmentRoutes);
app.use('/faculty', facultyRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

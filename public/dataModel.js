const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  date: String,
  value: Number,
  time: String,
});

module.exports = mongoose.model('Data', dataSchema);

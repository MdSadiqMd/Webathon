const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  // Other course attributes
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

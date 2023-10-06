const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  // Other department attributes
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;

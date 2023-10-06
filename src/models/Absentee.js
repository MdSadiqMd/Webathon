const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const absenteeSchema = new Schema({
  faculty: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model
  room: { type: String, required: true },
  date: { type: Date, required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course' }, // Reference to the Course model
  absentees: [{ type: String }], // An array of absentees for the specified room and date
  // Other absentee attributes
});

const Absentee = mongoose.model('Absentee', absenteeSchema);

module.exports = Absentee;

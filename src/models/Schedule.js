const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  faculty: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model
  course: { type: Schema.Types.ObjectId, ref: 'Course' }, // Reference to the Course model
  date: { type: Date, required: true },
  // Other schedule attributes
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  faculty: { type: Schema.Types.ObjectId, ref: 'User' },
  course: { type: Schema.Types.ObjectId, ref: 'Course' }, 
  date: { type: Date, required: true },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;

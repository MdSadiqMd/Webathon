const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const absenteeSchema = new Schema({
  faculty: { type: Schema.Types.ObjectId, ref: 'User' }, 
  room: { type: String, required: true },
  date: { type: Date, required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course' }, 
  absentees: [{ type: String }], 
});

const Absentee = mongoose.model('Absentee', absenteeSchema);

module.exports = Absentee;

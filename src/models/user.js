const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // Admin, Department Incharge, Faculty, etc.
  department: { type: Schema.Types.ObjectId, ref: 'Department' }, // Reference to the Department model
  // Other user attributes
});

const User = mongoose.model('User', userSchema);

module.exports = User;

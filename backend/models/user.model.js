const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  todayTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  prevTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  socialMediaLinks: { type: String },
  streak: { type: Number, default: 0 },
  challenge: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

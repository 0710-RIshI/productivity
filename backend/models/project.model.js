const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  duration: { type: Number },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;


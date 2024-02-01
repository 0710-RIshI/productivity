const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {type: String, required: true},
  duration: { type: Number}, 
  sessions:[{
    startTime:{type: Date} ,
    endTime:{type: Date},
  }],
  link: { type: String },
  image: { type: String },
  username: { type: String, required: true },
  subTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subtask' }],
  tags: [{ type: String }],
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

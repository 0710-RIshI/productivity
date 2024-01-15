const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,  // You can change the type based on the expected duration format
    required: true,
  },
  link: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

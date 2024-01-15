const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }],
});

const List = mongoose.model('List', listSchema);

module.exports = List;

const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  hashtags: [{
    type: String,
  }],
  mentions: [{
    type: String,
  }],
  likes: {
    type: Number,
    default: 0,
  },
  reply: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet',
  }],
  retweet: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet',
  }],
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;

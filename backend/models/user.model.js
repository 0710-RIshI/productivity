const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  displayPicture:{
    type:String,
    default:""
  }
  ,
  tweets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Tweet'
  }],
  lists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List',
  }],
  followers:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  following:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  socialMediaLinks: {
    type: Map,  
    of: String,
  },
  streak: {
    type: Number,
    default: 0,
  },
  challenge: {
    type: String,
    default:''  
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

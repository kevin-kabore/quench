var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
  name: {type: String, required: true},
  userName: {type: String, required: true},
  email: {type: String, required: true},
  googleId: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;

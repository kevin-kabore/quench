var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  name: {type: String, required: true},
  userName: {type: String, required: true},
  email: {type: String, required: true}
});

User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

var User = mongoose.model('User', userSchema);
module.exports = User;

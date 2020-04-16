const mongoose = require('mongoose');

const User = mongoose.model('users');

const deserializeUser = (id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
};

module.exports = deserializeUser;

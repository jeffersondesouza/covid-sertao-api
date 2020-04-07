const mongoose = require('mongoose');

const User = mongoose.model('users');

const singUpUser = async (profile, doneFn) => {
  const user = await new User({ googleId: profile.id }).save();
  doneFn(null, user);
};

module.exports = singUpUser;

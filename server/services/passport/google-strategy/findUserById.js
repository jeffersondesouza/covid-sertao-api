const mongoose = require('mongoose');

const User = mongoose.model('users');

const findUserById = async (id) => User.findOne({ googleId: id });

module.exports = findUserById;

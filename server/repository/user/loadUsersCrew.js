/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { UserRolesEnum } = require('../../enums');

const User = mongoose.model('users');

const loadUsers = async (cityId, userId) => {
  const users = await User.find({
    _id: {
      $not: { $eq: userId },
    },
    $and: [
      {
        _city: cityId,
      },
      {
        $or: [{ role: UserRolesEnum.MEMBER }, { role: UserRolesEnum.ADMIN }],
      },
    ],
  }).select('-password');

  return users;
};

module.exports = loadUsers;

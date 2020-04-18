/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { UserRolesEnum } = require('../../enums');

const User = mongoose.model('users');

const loadUsers = async (cityId) => {
  const users = await User.find({
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

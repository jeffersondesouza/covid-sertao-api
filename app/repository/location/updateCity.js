const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const updateCity = async (params) => {
  const { id, population } = params;

  return Location.updateOne(
    { _id: id },
    {
      population,
    }
  ).exec();
};

module.exports = updateCity;

const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const updateLocationReport = async ({ id, data }) => {
  return Location.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        updateAt: new Date(),
        report: data,
      },
    }
  ).exec();
};

module.exports = updateLocationReport;

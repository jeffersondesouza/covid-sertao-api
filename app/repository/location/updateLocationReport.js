const mongoose = require('mongoose');
const { CaseStatusNameEnum } = require('../../enums');

const Location = mongoose.model('locations');

const updateLocationReport = async ({ id, status }) => {
  const field = CaseStatusNameEnum[status];

  return Location.findOneAndUpdate(
    { _id: id },
    {
      $inc: {
        [`report.${[field]}`]: 1,
      },
      $set: {
        updateAt: new Date(),
      },
    }
  ).exec();
};

module.exports = updateLocationReport;

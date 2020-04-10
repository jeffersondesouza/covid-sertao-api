const mongoose = require('mongoose');

const Location = mongoose.model('locations');

const CASE_STATUS_ENUM = {
  1: 'confirmed',
  2: 'suspects',
  3: 'negative',
  4: 'deaths',
  5: 'recovered',
};

const updateReport = async ({ id, status }) => {
  const filed = CASE_STATUS_ENUM[status];

  return Location.findOneAndUpdate(
    { _id: id },
    {
      $inc: {
        [`report.${[filed]}`]: 1,
      },
      $set: {
        updateAt: new Date(),
      },
    }
  ).exec();
};

module.exports = updateReport;

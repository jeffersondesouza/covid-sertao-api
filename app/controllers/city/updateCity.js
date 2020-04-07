const mongoose = require('mongoose');

const Location = mongoose.model('locations');

module.exports = async (req, res) => {
  try {
    const { id, population } = req.body;

    const city = await Location.updateOne(
      { _id: id },
      {
        population,
      }
    ).exec();

    res.send(city);
  } catch (error) {
    res.send('Error').status(500);
  }
};

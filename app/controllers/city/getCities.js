const mongoose = require('mongoose');

const Location = mongoose.model('locations');

module.exports = async (req, res) => {
  try {
    const locations = await Location.find({
      _parent: { $exists: true },
      isCity: true,
    });

    res.send(locations);
  } catch (error) {
    res.send('not found');
  }
};

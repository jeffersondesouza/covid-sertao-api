const mongoose = require('mongoose');

const Location = mongoose.model('locations');

module.exports = async (req, res) => {
  try {
    const { stateId, name, site, email, population, phones } = req.body;

    const newCity = await new Location({
      _parent: stateId,
      name,
      site,
      email,
      population,
      phones,
      logo: '',
    }).save();

    res.send(newCity);
  } catch (error) {
    res.send('Error').status(500);
  }
};

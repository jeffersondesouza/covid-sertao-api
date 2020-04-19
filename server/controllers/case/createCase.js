const CasesRepository = require('../../repository/case');

module.exports = async (req, res) => {
  try {
    const newCase = await CasesRepository.createCase(req.body);

    res.send(newCase);
  } catch (error) {
    res.send('Internal server error').status(500);
  }
};
/* 
const CASE = {
  uf: '5e8babf51c9d44000083b976',
  city: '5e8bd73fe4196130f6c34014',
  risckFactor: [],
  symptoms: [ 'Febre', 'Dor de Garganta ', 'Dispneia' ],
  birthday: null,
  fullname: 'Jefferson de Souza',
  phoneCod: '11',
  street: 'Rua do Prado',
  houseNumber: '1',
  docId: '111',
  sus: '111',
  healthyWorker: '0',
  phoneNumber: '11111',
  neighborhood: 'Centro',
  covidStatus: '2',
  travelFromFocus: '1',
  focusTravelCity: '11',
  infectedContact: '1',
  infectedContactCity: '1111',
  symptomatic: '1',
  hasRiskFactor: '1'
};
 */

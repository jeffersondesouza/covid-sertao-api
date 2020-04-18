const { loadUsersCrew } = require('../controllers/user');
const { deleteUserCrew } = require('../controllers/user');

module.exports = (app, authenticate) => {
  app.get('/api/v1/user/crew', authenticate(), loadUsersCrew);

  app.delete('/api/v1/user/crew/:id', authenticate(), deleteUserCrew);
};

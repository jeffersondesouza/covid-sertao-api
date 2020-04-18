const { loadUsersCrew } = require('../controllers/user');

module.exports = (app, authenticate) => {
  app.get('/api/v1/user/crew', authenticate(), loadUsersCrew);
};

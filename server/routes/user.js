const { loadUsers } = require('../controllers/user');

module.exports = (app, authenticate) => {
  app.get('/api/v1/user', authenticate(), loadUsers);
};

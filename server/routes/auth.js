const { login, verifyToken } = require('../controllers/auth');

module.exports = (app, authenticate) => {
  app.post('/api/v1/auth/login', login);
  app.get('/api/v1/auth/verify', authenticate(), verifyToken);
};

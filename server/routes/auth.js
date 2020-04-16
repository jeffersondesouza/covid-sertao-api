const { login } = require('../controllers/auth');

module.exports = (app, authenticate) => {
  app.post('/api/v1/auth/login', login);
  app.get('/api/v1/auth/user', authenticate(), (req, res) => {
    res.send(req.user);
  });
};

const { createCase } = require('../controllers/case');

module.exports = (app) => {
  app.post('/api/v1/case', createCase);

  app.get('/api/v1/case', (req, res) => {
    res.send('ok');
  });

  app.get('/api/v1/case/:id', (req, res) => {
    res.send('ok');
  });

  app.put('/api/v1/case', (req, res) => {
    res.send('ok');
  });
};

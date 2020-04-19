const { createCase, loadCases } = require('../controllers/case');

module.exports = (app, authenticate) => {
  app.post('/api/v1/case', authenticate(), createCase);

  app.get('/api/v1/case', authenticate(), loadCases);

  app.get('/api/v1/case/:id', authenticate(), (req, res) => {
    res.send('ok');
  });

  app.put('/api/v1/case', authenticate(), (req, res) => {
    res.send('ok');
  });
};

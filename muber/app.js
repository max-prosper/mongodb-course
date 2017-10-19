const express = require('express');

const app = express();

app.get('/api', () => {
  res.send({ hi: 'there' });
});

module.exports = app;

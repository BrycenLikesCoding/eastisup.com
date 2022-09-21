const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname});
});

app.get('/projects', (req, res) => {
  res.sendFile('projects.html', {root: __dirname});
});

app.listen(8080);

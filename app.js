var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello jenkinss');
});

app.listen(9000);

module.exports = app;

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello world` jenkinsss');
});

app.listen(process.env.PORT || 5000);

module.exports = app;

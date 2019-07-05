var express = require('express');
var app = express();

app.route('/Node').get(function (req, res) {
  res.send("Tutorial on Node");
});

app.route('/Angular').get(function (req, res) {
  res.send('Tutorial On Angular');
});

app.get('/', function (req, res) {
  res.send('Welcome to Guru99 Tutorials');
});

app.listen(3000,function() {});
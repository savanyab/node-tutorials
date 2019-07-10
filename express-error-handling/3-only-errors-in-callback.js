const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3000, function () { });

app.get('/', [
  function (req, res, next) {
    fs.writeFile('/inaccessible-path', 'data', next)
  },
  function (req, res) {
    res.send('OK')
  }
])
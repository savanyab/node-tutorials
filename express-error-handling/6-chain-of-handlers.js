const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3000, function () { })

app.get('/', [
  function (req, res, next) {
    fs.readFile('/maybe-valid-file', 'utf-8', function (err, data) {
      res.locals.data = data
      next(err)
    })
  },
  function (req, res) {
    res.locals.data = res.locals.data.split(',')[1]
    res.send(res.locals.data)
  }
])
const express = require('express');
const app = express();

app.listen(3000, function () { });

app.get('/', function (req, res, next) {
  setTimeout(function () {
    try {
      throw new Error('BROKEN')
    } catch (err) {
      next(err)
    }
  }, 100)
})
const express = require('express');
const app = express();

app.listen(3000, function () { })

app.get('/', function (req, res, next) {
  Promise.resolve().then(function () {
    throw new Error('BROKEN')
  }).catch(next) // Errors will be passed to Express.
})
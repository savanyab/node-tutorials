const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3000, function () { });

app.get('/', function (req, res, next) {
  fs.readFile('/file-does-not-exist', function (err, data) {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
})
const express = require('express');
const app = express();

app.listen(3000, function () { })

function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
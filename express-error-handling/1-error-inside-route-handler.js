const express = require('express');
const app = express();

app.listen(3000, function () { });

app.get('/', function (req, res) {
  throw new Error('BROKEN') // Express will catch this on its own.
})
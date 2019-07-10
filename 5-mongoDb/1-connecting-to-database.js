var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost';

MongoClient.connect(url, function (err, client) {
  var db = client.db('EmployeeDB')
  console.log('Connected');
  client.close();
});

var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost';

MongoClient.connect(url)
  .then(function (err, client) {
    var db = client.db('EmployeeDB');
    db.collection('Employee').updateOne({
      "EmployeeName": "Martin"
    }, {
        $set: {
          "EmployeeName": "Mohan"
        }
      });
  }); 
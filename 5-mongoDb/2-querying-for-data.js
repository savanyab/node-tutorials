var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost';

MongoClient.connect(url, function (err, client) {
  var db = client.db('EmployeeDB');
  var cursor = db.collection('Employee').find();
  
  cursor.forEach(function (err, doc) {
    console.log(doc);
  });
}); 


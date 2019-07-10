var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost';
var str = "";

app.route('/Employeeid').get(function(req, res) {
    MongoClient.connect(url, function (err, client) {
       var db = client.db('EmployeeDB')
       var collection = db.collection('Employee');
       var cursor = collection.find({});
       str = "";
       cursor.forEach(function(item) {
           if (item != null) {
                   str = str + "    Employee id  " + item.Employeeid + "</br>";
           }
       }, function(err) {
           res.send(str);
           db.close();
          }
       );
   });
});
app.listen(8080, function() {});
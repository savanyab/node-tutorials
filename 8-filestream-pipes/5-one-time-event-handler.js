var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.once('data_received', function() {
  console.log('data received succesfully.');
});

eventEmitter.emit('data_received'); 

eventEmitter.emit('data_received'); 
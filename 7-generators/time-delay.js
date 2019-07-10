function timeDelay(ptime, callback) {
  setTimeout(function () {
    callback("Pausing for " + ptime);
  }, ptime)
} 

timeDelay(1000, function (message) {
  console.log(message);
  timeDelay(2000, function (message) {
    console.log(message);
    timeDelay(3000, function (message) {
      console.log(message);
    });
  });
});

function* messages() {
  console.log(yield (timeDelay(1000, function () { })));
  console.log(yield (timeDelay(2000, function () { })));
  console.log(yield (timeDelay(3000, function () { })));
}

function* Add(x) {
  yield x + 1;
  var y = yield(null);
  y = 6
  return x + y;
}

var gen = Add(5);

gen.next();

gen.next();
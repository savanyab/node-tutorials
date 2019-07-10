describe('hooks', function() {
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});

describe('describing hooks', function () {
  beforeEach(function() {
    // beforeEach hook
  });
  
  beforeEach(function namedFun() {
    // beforeEach:namedFun
  });
  
  beforeEach('some description', function() {
    // beforeEach:some description
  });
});

describe('Connection', function() {
  var db = new Connection(),
    tobi = new User('tobi'),
    loki = new User('loki'),
    jane = new User('jane');

  beforeEach(function(done) {
    db.clear(function(err) {
      if (err) return done(err);
      db.save([tobi, loki, jane], done);
    });
  });

  describe('#find()', function() {
    it('respond with matching records', function(done) {
      db.find({type: 'User'}, function(err, res) {
        if (err) return done(err);
        res.should.have.length(3);
        done();
      });
    });
  });
});

beforeEach(function() {
  console.log('before every test in every file');
});



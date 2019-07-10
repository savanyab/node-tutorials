var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Double done', function () {
  it('double done', function(done) {
    // Calling `done()` twice is an error
    setImmediate(done);
    setImmediate(done);
  });
})

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(done);
    });
  });
});

describe('#find()', function() {
  it('respond with matching records', function() {
    return db.find({type: 'User'}).should.eventually.have.length(3);
  });
});

describe('Promise and done', function () {
  it('should complete this test', function (done) {
    return new Promise(function (resolve) {
      assert.ok(true);
      resolve();
    }).then(done);
  });
});

describe('#find()', function() {
  it('responds with matching records', async function() {
    const users = await db.find({type: 'User'});
    users.should.have.length(3);
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });
  });
});

describe('my suite', () => {
  it('my test', () => {
    // should set the timeout of this test to 1000 ms; instead will fail
    this.timeout(1000);
    assert.ok(true);
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    // pending test below
    it('should return -1 when the value is not present');
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it.only('should return -1 unless present', function() {
      // this test will be run
    });

    it.only('should return the index when present', function() {
      // this test will also be run
    });

    it('should return -1 if called with a non-Array context', function() {
      // this test will not be run
    });
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it.skip('should return -1 unless present', function() {
      // this test will not be run
    });

    it('should return the index when present', function() {
      // this test will be run
    });
  });
});

describe('use this.skip', function () {
  it('should only test in the correct environment', function() {
    // if (/* check test environment */) {
    //   // make assertions
    // } else {
    //   this.skip();
    // }
  });
})

describe('outer', function() {
  before(function() {
    this.skip();
  });

  after(function() {
    // will be executed
  });

  describe('inner', function() {
    before(function() {
      // will be skipped
    });

    after(function() {
      // will be skipped
    });
  });
});

describe('retries', function() {
  // Retry all tests in this suite up to 4 times
  this.retries(4);

  beforeEach(function() {
    browser.get('http://www.yahoo.com');
  });

  it('should succeed on the 3rd try', function() {
    // Specify this test to only retry up to 2 times
    this.retries(2);
    expect($('.foo').isDisplayed()).to.eventually.be.true;
  });
});

// dinamcally generating tests:

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', function() {
  var tests = [
    {args: [1, 2], expected: 3},
    {args: [1, 2, 3], expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(test) {
    it.only('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});

// test duration:

describe('something slow', function() {
  this.slow(300000); // five minutes

  it('should take long enough for me to go make a sandwich', function() {
    // ...
  });
});

// suite-level timeouts:

describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done) {
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done) {
    setTimeout(done, 250);
  });
});

// test-level timeouts:
it('should take less than 500ms', function(done) {
  this.timeout(500);
  setTimeout(done, 300);
});

// hook-level timeout:

describe('a suite of tests', function() {
  beforeEach(function(done) {
    this.timeout(3000); // A very long environment setup.
    setTimeout(done, 2500);
  });
});

// BDD-interface:
//provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach()

describe('Array', function() {
  before(function() {
    // ...
  });

  describe('#indexOf()', function() {
    context('when not present', function() {
      it('should not throw an error', function() {
        (function() {
          [1, 2, 3].indexOf(4);
        }.should.not.throw());
      });
      it('should return -1', function() {
        [1, 2, 3].indexOf(4).should.equal(-1);
      });
    });
    context('when present', function() {
      it('should return the index where the element first appears in the array', function() {
        [1, 2, 3].indexOf(3).should.equal(2);
      });
    });
  });
});

// TDD interface provides suite(), test(), suiteSetup(), suiteTeardown(), setup(), and teardown():
suite('Array', function() {
  setup(function() {
    // ...
  });

  suite('#indexOf()', function() {
    test('should return -1 when not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

// exports interface:

module.exports = {
  before: function() {
    // ...
  },

  Array: {
    '#indexOf()': {
      'should return -1 when not present': function() {
        [1, 2, 3].indexOf(4).should.equal(-1);
      }
    }
  }
};

// QUnit

function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

suite('Array');

test('#length', function() {
  var arr = [1, 2, 3];
  ok(arr.length == 3);
});

test('#indexOf()', function() {
  var arr = [1, 2, 3];
  ok(arr.indexOf(1) == 0);
  ok(arr.indexOf(2) == 1);
  ok(arr.indexOf(3) == 2);
});

suite('String');

test('#length', function() {
  ok('foo'.length == 3);
});


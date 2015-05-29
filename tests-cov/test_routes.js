
  // instrument by jscoverage, do not modifly this file
  (function(file, lines, conds, source) {
      var BASE;
      if (typeof global === "object") {
          BASE = global;
      } else if (typeof window === "object") {
          BASE = window;
      } else {
          throw new Error("[jscoverage] unknow ENV!");
      }
      if (BASE._$jscoverage) {
          BASE._$jscmd(file, "init", lines, conds, source);
          return;
      }
      var cov = {};
      /**
   * jsc(file, 'init', lines, condtions)
   * jsc(file, 'line', lineNum)
   * jsc(file, 'cond', lineNum, expr, start, offset)
   */
      function jscmd(file, type, line, express, start, offset) {
          var storage;
          switch (type) {
            case "init":
              if (cov[file]) {
                  storage = cov[file];
              } else {
                  storage = [];
                  for (var i = 0; i < line.length; i++) {
                      storage[line[i]] = 0;
                  }
                  var condition = express;
                  var source = start;
                  storage.condition = condition;
                  storage.source = source;
              }
              cov[file] = storage;
              break;

            case "line":
              storage = cov[file];
              storage[line]++;
              break;

            case "cond":
              storage = cov[file];
              storage.condition[line]++;
              return express;
          }
      }
      BASE._$jscoverage = cov;
      BASE._$jscmd = jscmd;
      jscmd(file, "init", lines, conds, source);
  })("tests/test_routes.js", [1,2,4,14,24,5,6,9,15,16,19,25,26,29], {"8_10_5":0,"18_10_5":0,"28_10_5":0}, ["var app = require('../app.js');","var request = require('supertest');","","describe('GET /', function(){","  it('should return /', function(done){","    request(app).get('/')","    .end(function(error, response){","      if (error) return done(error);","      done();","    });","  });","});","","describe('GET /login', function(){","  it('should return /login', function(done){","    request(app).get('/login')","    .end(function(error, response){","      if (error) return done(error);","      done();","    });","  });","});","","describe('GET /about', function(){","  it('should return /about', function(done){","    request(app).get('/about')","    .end(function(error, response){","      if (error) return done(error);","      done();","    });","  });","});",""]);
_$jscmd("tests/test_routes.js", "line", 1);

var app = require("../app.js");

_$jscmd("tests/test_routes.js", "line", 2);

var request = require("supertest");

_$jscmd("tests/test_routes.js", "line", 4);

describe("GET /", function() {
    _$jscmd("tests/test_routes.js", "line", 5);
    it("should return /", function(done) {
        _$jscmd("tests/test_routes.js", "line", 6);
        request(app).get("/").end(function(error, response) {
            if (_$jscmd("tests/test_routes.js", "cond", "8_10_5", error)) return done(error);
            _$jscmd("tests/test_routes.js", "line", 9);
            done();
        });
    });
});

_$jscmd("tests/test_routes.js", "line", 14);

describe("GET /login", function() {
    _$jscmd("tests/test_routes.js", "line", 15);
    it("should return /login", function(done) {
        _$jscmd("tests/test_routes.js", "line", 16);
        request(app).get("/login").end(function(error, response) {
            if (_$jscmd("tests/test_routes.js", "cond", "18_10_5", error)) return done(error);
            _$jscmd("tests/test_routes.js", "line", 19);
            done();
        });
    });
});

_$jscmd("tests/test_routes.js", "line", 24);

describe("GET /about", function() {
    _$jscmd("tests/test_routes.js", "line", 25);
    it("should return /about", function(done) {
        _$jscmd("tests/test_routes.js", "line", 26);
        request(app).get("/about").end(function(error, response) {
            if (_$jscmd("tests/test_routes.js", "cond", "28_10_5", error)) return done(error);
            _$jscmd("tests/test_routes.js", "line", 29);
            done();
        });
    });
});
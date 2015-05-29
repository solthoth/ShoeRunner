
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
  })("tests/test_api.js", [1,2,4,5,6,9], {"8_10_5":0}, ["var app = require('../app.js');","var request = require('supertest');","","describe('GET /api/', function(){","  it('should return /api', function(done){","    request(app).get('/api')","    .end(function(error, response){","      if (error) return done(error);","      done();","    });","  });","});",""]);
_$jscmd("tests/test_api.js", "line", 1);

var app = require("../app.js");

_$jscmd("tests/test_api.js", "line", 2);

var request = require("supertest");

_$jscmd("tests/test_api.js", "line", 4);

describe("GET /api/", function() {
    _$jscmd("tests/test_api.js", "line", 5);
    it("should return /api", function(done) {
        _$jscmd("tests/test_api.js", "line", 6);
        request(app).get("/api").end(function(error, response) {
            if (_$jscmd("tests/test_api.js", "cond", "8_10_5", error)) return done(error);
            _$jscmd("tests/test_api.js", "line", 9);
            done();
        });
    });
});
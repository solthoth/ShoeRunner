var app = require('../app.js');
var request = require('supertest');

describe('GET /', function(){
  it('should return /', function(done){
    request(app).get('/')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

describe('GET /login', function(){
  it('should return /login', function(done){
    request(app).get('/login')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

describe('GET /about', function(){
  it('should return /about', function(done){
    request(app).get('/about')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

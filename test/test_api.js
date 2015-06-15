var app = require('../app.js');
var request = require('supertest');

describe('GET /api/', function(){
  it('should return /api', function(done){
    request(app).get('/api')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

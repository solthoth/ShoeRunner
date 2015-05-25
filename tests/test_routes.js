var app = require('../app.js');
var request = require('supertest');

describe('GET /', function(){
  it('should return root[/]', function(done){
    request(app).get('/')
    .end(function(error, response){
      if (error) return done(error);
      done();
    });
  });
});

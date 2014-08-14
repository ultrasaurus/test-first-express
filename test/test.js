var request = require('supertest')
  , express = require('express');

var app = express();

describe('Home page', function() {
  it("renders successfully", function(done) {
    console.log('========= hey!');
    request(app).get('/').expect(200, done);    
  })
})



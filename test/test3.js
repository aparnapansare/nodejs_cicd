var request = require('supertest');
//var app = require(‘../index.js’);
var apps = require('../appi.js');

describe('GET /', function() {
    it('test respond with hello world', function(done) { 
    //navigate to root and check the the response is "hello world"
    a = request(apps);
    console.log(a);
    a.get('/').expect('hello world', done);
 });
});


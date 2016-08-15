var express = require('express');
var app = express();
var Redis = require('ioredis');
var redis = new Redis(6379, '192.241.129.187');

app.get('/', function (req, res) {
  var person_name;
  redis.get('person_name', function (err, result) {
      person_name = result;
      res.send('Hello World, ' + person_name);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
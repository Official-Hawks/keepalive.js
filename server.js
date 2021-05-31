const express = require('express');
var request = require('request')
const path = require('path');
const server = express();



server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
  request.get('http://localhost:3000', {forever: true}, function (err, res, body) {});
  request.get('http://127.0.0.1:3000', {forever: true}, function (err, res, body) {});
});



function keepAlive(){

   server.listen(3000, ()=>{console.log("Server is online!")});
   request.get('http://localhost:3000', {forever: true}, function (err, res, body) {});
   request.get('http://127.0.0.1:3000', {forever: true}, function (err, res, body) {});

}



module.exports = keepAlive;

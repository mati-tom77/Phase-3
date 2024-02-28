// Question 6
// const http = require("http");
// const myServer = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Request received and processed");
// });
// myServer.listen(1234, () => {
//   console.log("Server running");
// });

// Question 7
// var randomNumberModule = require('./randomNumber');
// var http = require('http');
// var server = http.createServer(function(req, res) {
//   var randomNumber = randomNumberModule.random();
//   // Set the response headers
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   // Send the generated random number as the response
//   res.end(randomNumber.toString());
// });
// server.listen(1234, 'localhost');
// console.log('Server running at http://localhost:1234/');
// Question 8

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  if (req.url === '/about.html') {
    fs.readFile('apple-html-css-replica/about.html', function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('File not found');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  }
  else if (req.url === '/index.html') {
    fs.readFile('apple-html-css-replica/index.html', function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('File not found');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('File not found');
  }});

server.listen(1234, 'localhost');
console.log('Server running at http://localhost:1234/')
// Question number 9
// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'static')));

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'static', 'apple-html-css-replica', 'about.html'));
// });

// app.listen(1234, () => {
//   console.log('Server is running on http://localhost:1234');
// });
// app.get('/:page', (req, res) => {
//   res.sendFile(path.join(__dirname, 'static', req.params.page));
// });
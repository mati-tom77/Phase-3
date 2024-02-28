// Question 6 using HTTP module
// const http = require("http");
// const myServer = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Request received and processed");
// });
// myServer.listen(1234, () => {
//   console.log("Server running");
// });
window.onbeforeunload = function(){ return 'Leave page?'; };
console.log("window");
// **********************************
// Question 7 using http module

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

// ********************************
// Question 8 using http module

// var http = require("http");
// var fs = require("fs");
// var url = require("url");
// var mimeTypes = require("mime-types");
// var mimeTypeLookUp = mimeTypes.lookup;
// var myServer = http.createServer(function (req, res) {
// var parsedUrl = url.parse(req.url, true);
// var parsedURLsPath = parsedUrl.pathname;
// if (parsedURLsPath == "/") {
// parsedURLsPath = "/index.html";
// }
// var setMimeOfFileToServe = mimeTypeLookUp(parsedURLsPath);
// var locationOfFileToServe = __dirname + "/static/apple-html-css-replica/" + parsedURLsPath;
// fs.readFile(locationOfFileToServe, function (err, data) {
// res.writeHead(200, { "content-type": setMimeOfFileToServe });
// res.end(data);
// });
// });
// myServer.listen(1234, function () {
// console.log("Server listening at port 1234");
// });
// *****************************
// Question 9 doing the above question using express module

// Question 6 using Express module

// const express = require("express");
// const serverApp = express();
// serverApp.get("/", function (req, res) {
// res.send("<h1>Request processed with Express</>");
// });
// serverApp.listen(1234, function (err) {
// if (err) {
// console.log(err);
// }
// console.log("My express server listening at port 1234 ");
// });

// Question 7 using Express module
// var randomNumberModule = require('./randomNumber');
// const express = require("express");
// const serverApp = express();
// serverApp.get("/", function (req, res) {
//   var randomNumber = randomNumberModule.random();
// res.send(randomNumber.toString());
// });
// serverApp.listen(1234, function (err) {
// if (err) {
// console.log(err);
// }
// console.log("My express server listening at port 1234 ");
// });
//  Question 8 using Express module
// const express = require("express");
// const serverApp = express();
// serverApp.use(express.static("./static/apple-html-css-replica"));
// serverApp.listen(1234, function (err) {
// if (err) {
// console.log(err);
// }
// console.log("Express listening at port 1234 ");
// });
// serverApp.get("*",(req,res)=>{
//     res.sendFile(__dirname + "/static/apple-html-css-replica/about.html");
// });
// OR 
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
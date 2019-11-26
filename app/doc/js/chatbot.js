"use strict";

// 'use strict';
// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/chatbot.html');
//   });
// //io.onに処理を追加
// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){
//       io.emit('chat message', msg);
//     });
//   });
//   http.listen(3000, function(){
//     console.log('listening on *:3000');
//   });
var express = require('express');

var app = express();
var port = 3000;
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
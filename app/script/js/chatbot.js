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

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
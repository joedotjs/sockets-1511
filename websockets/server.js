var express = require('express');
var socketio = require('socket.io');

var server = require('http').createServer();
var app = express();

server.listen(1337, function () {
    console.log('Server on port 1337');
});

server.on('request', app);

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var io = socketio(server);

io.on('connection', function (socket) {

    socket.on('newMessage', function (message) {
        io.sockets.emit('chatMessage', message);
    });

});
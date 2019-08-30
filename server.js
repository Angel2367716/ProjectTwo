const express = require('express');
const app = express();
const http = require('http');

const server = http.Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

server.listen(8080);
console.log('Server started');

let SOCKET_LIST = {};

const io = require('socket.io')(server, {});
io.sockets.on('connection', function (socket) {
    socket.id = Math.random();
    socket.x = 0;
    socket.y = 0;
    SOCKET_LIST[socket.id] = socket;


    console.log('Socket connection');
});

setInterval(() => {
    for (let i in SOCKET_LIST) {
        let socket = SOCKET_LIST[i];
        socket.x++;
        socket.y++;
        socket.emit('newPosition', {
            x:socket.x,
            y:socket.y
        })
    }
});
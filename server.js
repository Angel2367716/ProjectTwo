const express = require('express');
const app = express();
const http = require('http');

const server = http.Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});
app.use(express.static(__dirname + '/client/'));

const port = process.env.PORT || 3000;
server.listen(port);
console.log('Server started. Port = ' + port);

let SOCKET_LIST = {};
let PLAYER_LIST = {};

// let Player = function (id) {
//     let self = {
//         x: 250,
//         y: 250,
//         id: id,
//         number: "" + Math.floor(10 * Math.random()),
//         pressingRight: false,
//         pressingLeft: false,
//         pressingUp: false,
//         pressingDown: false,
//         maxSpd:10,
//     }
//     self.updatePosition = function() {
//         if(self.pressingRight){
//             self.x += self.maxSpd;
//         }
//         else if(self.pressingLeft){
//             self.x -= self.maxSpd;
//         }
//         else if(self.pressingUp){
//             self.y -= self.maxSpd;
//         }
//         else if(self.pressingDown){
//             self.y += self.maxSpd;
//         }
//     }
//     return self;
// }


const io = require('socket.io')(server, {});
io.on('connection', function (socket) {
    console.log('Socket connection. Id = ' + socket.id);
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;

    let player = Player(socket.id);
    PLAYER_LIST[socket.id] = player;

    socket.on('disconnect', function () {
        delete SOCKET_LIST[socket.id];
        delete PLAYER_LIST[socket.id];
    });

    // socket.on('keypress', (data) => {
    //     if(data.inputId=== 'right'){
    //         player.pressingRight = data.state;
    //     }
    //     else if(data.inputId=== 'left'){
    //         player.pressingLeft = data.state;
    //     }
    //     else if(data.inputId=== 'up'){
    //         player.pressingUp = data.state;
    //     }
    //     else if(data.inputId=== 'down'){
    //         player.pressingDown = data.state;
    //     }
    // });
});

setInterval(function () {
    let pack = [];
    for (let i in PLAYER_LIST) {
        let player = PLAYER_LIST[i];
        // player.updatePosition();
        pack.push({
            x: player.x,
            y: player.y,
            number: player.number
        });
    }
    for (let i in SOCKET_LIST) {
        let socket = SOCKET_LIST[i];
        // socket.emit('newPosition', pack);
    }
}, 3000 / 75);

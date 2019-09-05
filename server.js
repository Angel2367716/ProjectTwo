const mysql = require('mysql');
const express = require('express');
<<<<<<< HEAD
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require("path");
const http = require('http');
const PORT = process.env.PORT || 3000;
const app = express();
require('dotenv').config();
const server = http.Server(app);

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

//parse application body as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connection.connect()

//express static allows to serve files like images, or css and javascript 
app.use(express.static(__dirname + 'client/assets'));

//ROUTES
//=================================================

//get login
=======
const app = express();
const http = require('http');

const server = http.Server(app);

app.use('/client', express.static(__dirname + '/client'));
>>>>>>> 816d7ecb4f29bc0dbda7e4d3806c25b385c6fa1e
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/login.html'));
});
//post login
app.post('/auth', (req, res) => {
    const username = request.body.username;
    const password = request.body.password;
    if (username && password) {
        connection.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], function (err, response, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/game');
            } else {
                response.send("Wrong Username and/or password. Please try again!");
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password')
    }
    response.end();
});

<<<<<<< HEAD

app.get('/game', (req, res) => {
    if (request.session.loggedin) {
        response.send("Welcome " + request.session.username + "It's been a while!");
        // res.sendFile(__dirname + '/client/index.html');
    } else {
        response.send("Please login to view this page!");
    }
    response.end();
});

//=================================================

server.listen(PORT);
console.log('Server started. Port = ' + PORT);
=======
const port = process.env.PORT || 3000;
>>>>>>> 816d7ecb4f29bc0dbda7e4d3806c25b385c6fa1e

server.listen(port);
console.log('Server started. Port: ' + port);


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

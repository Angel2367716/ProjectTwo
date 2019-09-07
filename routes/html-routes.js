// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  //// index route loads index.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../client/index.html"));
  // });

  app.get('/', (request, res) => {
    res.sendFile(path.join(__dirname + '/client/.html'));
  });



  //// login loads login.html
  // app.get("/login", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../client/login.html"));
  // });

  app.get('/login', (request, res) => {
    res.sendFile(path.join(__dirname + '../client/login.html'));
  });

  //POST LOGIN
  app.post('/auth', (request, response) => {
    const username = request.body.username;
    const password = request.body.password;
    if (username && password) {
      connection.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], function (err, results, fields) {
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
      response.send('Please enter Username and/or Password');
      response.end();
    }
  });


    //POST New User
    app.post('/new', (request, response) => {
      const first_name = request.body.first_name;
      const last_name = request.body.last_name;
      const username = request.body.username;
      const email = request.body.email;
      const password = request.body.password;
      if (username && password) {
        connection.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], function (err, results, fields) {
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
        response.send('Please enter Username and/or Password');
        response.end();
      }
    });

  // // game route loads game.html
  // app.get("/game", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../client/game.html"));
  // });


//GAME ROUTE
app.get('/game', (request, response) => {

  if (request.session.loggedin) {
      // response.send("Welcome " + request.session.username + " it's been a while!");
      return response.sendFile(path.join(__dirname + '/client/index.html'));
  } else {
      response.write("<h1>Please login to view this page!</h1>");
      response.end('<a href=' + '/logout' + '>Logout</a>');
  }
  response.end();
});

//LOGOUT ROUTE
app.get('/logout', (request, response) => {
  request.session.destroy((err) => {
      if (err) {
          return console.log(err);
      }
      response.redirect('/');
  });
});


};

// *********************************************************************************
// api-routes.js - this file offers a set of routes for saving data to the database 
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our db model
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new User
  app.post("/new", function(req, res) {
    console.log(req.body);
    db.Post.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};

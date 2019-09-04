const express = require("express");

const router = express.Router();

//import model to use its database functions
// const user = require("../models/user.js");




//Home

router.get("/", (req, res) => {
    
    //we are calling the rendoer method on the response object, and we'll tell it what template to render the home handlerbar, then we'll populate the variables in the template with the js object home that we passed to render (message variable and subheading variable)
    res.render('home', {
        //the values of message and subheading will be plugged into the spaces in the home.handlerbars file under the partials folder
        message: "Welcome to our game!!",
        subheading: "You need to create an user name to start playing"
    });
});


//login
router.get("/login", (req, res)=>{res.render("please login to our game")})

//*------------------------------------------------------------------------*//
//new user GET
router.get("/register", (req, res)=>{
    res.render("home", {
        message: "Registration"
    })
});
//New user POST 
router.post("/register", (req, res)=>{
    res.render("home", {
        message: "Registration Complete"
    })
})
 //*------------------------------------------------------------------------*//
//game
router.get("/game", (req, res)=>{res.render("do enjoy the game")})


// Export routes for server.js to use.
module.exports = router;

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};

// var db = require("../models");

// db.user.create({
//   first_name:"peter",
//   last_name:"parker",
//   username: "the_New_Yorker_Crawler",
//   email: "peter@parker.com",
//   password: "IamSpiderMan",
// }).then(function(dbUser){
//   console.log(dbUser);
// });

// // Dependencies
// // =============================================================

// //Pull in Sequelize package
// const Sequelize = require ("sequelize");

// //Reference our connection to the database with a lower case squelize
// const sequelize = require ("../config/connection.js");

// //Create a "user" model

// const User = sequelize.define("user", {
//     id:{
//         type: Sequelize.INTEGER,
//         autoIncrement:true,
//         primaryKey:true
//     },
//     first_name:{type: Sequelize.STRING},
//     last_name:{type: Sequelize.STRING},
//     username: {type: Sequelize.STRING},
//     email: {type: Sequelize.STRING},
//     password: {type: Sequelize.STRING},
//   })

// //Sync with DB
// User.sync();

// //Export the user model
// module.exports = User;


// module.exports = function (sequelize, DataTypes) {
//   const User = sequelize.define("User", {
//     first_name: DataTypes.STRING,
//     last_name: DataTypes.STRING,
//     email_address: DataTypes.STRING,
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//   });
//   return User;
// };
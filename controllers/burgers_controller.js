var express = require("express");
var app = express();

// Import the model to use its database functions.
var burger = require("../models/burger.js");


//routes
app.get("/", function (req, res) {
    connection.query("SELECT * FROM burger;", function (err, data) {
        if (err) throw err;
        console.log(data)
        //this makes an array an object - Handlebars expects an object
        res.render("index", {
            burgers: data
        });
    });

});
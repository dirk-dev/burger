var express = require("express");
var router = express.Router();


// Import the model to use its database functions.
var orm = require("../config/orm.js");

//routes
router.get("/index", function (req, res) {
    console.log('I am here')
    orm.selectAll(function (data) {
        var burgerObject = {
            burgers: data // not getting executed
        };
        console.log('burger controller: ', burgerObject);
        res.render("index", burgerObject);
    });
});

module.exports = router;
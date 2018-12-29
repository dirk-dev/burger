var express = require("express");
var router = express.Router();


// Import the model to use its database functions.
var orm = require("../config/orm.js");

//routes
router.get("/", function (req, res) {
    console.log('I am here')
    orm.selectAll(function (data) {
        var hbsObject = {
            burgers: data // not getting executed
        };
        console.log('burger controller: ', hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;
var express = require("express");
var router = express.Router();


// Import the model to use its database functions.
var orm = require("../config/orm.js");

//routes
router.get("/index", function (req, res) {
    // console.log('I am here')
    orm.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log('burgers_controller get route: ', burgerObject);
        res.render("index", burgerObject);
    });
});

//add new burger to DB
//req returns object.object
router.post("/api/burgers", function (req, res) {
    console.log('router.post: ', req.body.burger_name)
    orm.insertBurger([
        req.body.burger_name
    ], [
        req.body.burger_name
    ], function (result) {
        console.log("results from post", res)
        res.json({
            id: result.insertId
        });
    });
});

module.exports = router;
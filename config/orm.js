// Import MySQL connection
var connection = require("../config/connection.js");

var orm = {

    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err
            };
            // console.log('response: ', res);
            cb(res)
        })
    },

    //this is a post to add a new burger to the DB
    insertBurger: function (vals) {
        var queryString = "INSERT INTO burgers (burger_name) ";
        queryString += "VALUES (";
        //will I need quotes to wrap the burger_name?
        queryString += "'";
        queryString += vals;
        queryString += "'";
        queryString += ");";

        console.log("SQL query = ", queryString)

        connection.query(queryString, vals, function (err, res) {
            if (err) {
                throw err
            };
            // cb(res)
        })
    },

    updateOne: function () {
        var queryString = "UPDATE INTO burgers "
        connection.query(queryString)

    }

}

module.exports = orm;
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
    insertBurger: function (burger_name) {
        var queryString = "INSERT INTO burgers ";
        queryString += "(";
        queryString += burger_name;
        queryString += ") ";
        queryString += "VALUES (";
        //will I need quotes to wrap the burger_name?
        queryString += burger_name;
        // queryString += ",";
        // queryString += "1";
        queryString += ");";

        console.log("insert queryString = ", queryString)

        connection.query(queryString, function (err, res) {
            if (err) {
                throw err
            };
            console.log('inserted: ', res);
            // cb(res)
        })
    },

    updateOne: function () {
        var queryString = "UPDATE INTO burgers "
        connection.query(queryString)

    }

}

module.exports = orm;
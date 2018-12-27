// Import MySQL connection
var connection = require("../config/connection.js");

var orm = {

    SelectAll: function () {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(result);
        })

    },

    insertOne: function () {
        var queryString = "INSERT INTO burgers "
        connection.query(queryString)

    },

    updateOne: function () {
        var queryString = "UPDATE INTO burgers "
        connection.query(queryString)

    }

}

module.exports = orm;
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public/'))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public/'))


var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

// app.use(routes);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
})

/* PSEUDOCODE
initial HTML has graphic & form for user input

- URL - localhost:3000/index

*/
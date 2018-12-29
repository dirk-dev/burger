var express = require("express");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(express.static("models"));


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var router = require("./controllers/burgers_controller.js");

app.use(router);
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
})

/* PSEUDOCODE
initial HTML has graphic & form for user input. Demo video has no initial values.

- URL - localhost:3000
1. user enters data via form w/ submit
2. on SUBMIT, data POSTed to burgers_DB with devoured set to 0, screen redraws with added burger(s) in box on left side, with Devour it button.
3. If button for item is clicked, PUT (update) burger in DB, burger moves to dialog box on rt side of screen.

*/
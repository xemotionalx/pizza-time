var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//serves static content from the public folder
app.use(express.static("public"));

// parse app body as json (??)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sets handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// imports routes (apis/json) & gives server access to them
var routes = require("./controllers/pizzaController");

app.use(routes);

//start the server in order to listen to requests
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
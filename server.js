// this is requiring express 
var express = require("express");
// this is initializing express and setting our port for heroku
var app = express();
var PORT = process.env.PORT || 4522;
// we are using epxress with json data with url encoded for body aprser
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



// we are requiring our routes here
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
// we are making a listen method to see if the port is listening on our port
app.listen(PORT, function ()    {
console.log("Listening on PORT: " + PORT )});

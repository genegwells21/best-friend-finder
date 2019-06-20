var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencode({ extended: true}));




require("./app/routing/api-route.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function ()    {
console.log("Listening on PORT: " + PORT );

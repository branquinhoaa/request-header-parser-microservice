var routes = require("./routes.js");
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

routes(app);

app.listen(port, function() {
    console.log('listening on port 8080')
})

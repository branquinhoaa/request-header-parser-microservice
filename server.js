var express = require("express");
var app = express();
var port = process.env.port || 8080;


app.get( function(req, res) {
    var conf = (req.headers['user-agent']).substring(13, 30);
    var ip = (req.headers['x-forwarded-for']);
    var lang = (req.headers['accept-language']).substring(0, 5);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({
        "ip": ip,
        "language": lang,
        "configurações": conf
    }, null, 3));
});

app.listen(port, function() {
    console.log("I'm serving your desires.");
})
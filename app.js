var express = require('express'),
    request = require('request');;

var app = express();
var port = process.env.PORT || 5000;

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.get('/*', function(req, res) {
  if (req.url.match(/user_prefs/)) {
    request("http://rec-svc.stg.ec2.nytimes.com/?uid=" + req.query.uid).pipe(res);
  } else {
    res.sendfile(__dirname + req.url);
  };
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
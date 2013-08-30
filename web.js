var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
app.get('/', function(request, response) {
    var text = fs.readFileSync('index.html').toString();
    console.log('requested');
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

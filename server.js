var path = require('path');
var express = require('express');


var app = express();

staticPath = path.normalize(__dirname + '/bower_components');
app.use('/bower_components', express.static(staticPath));
app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');




var server = app.listen(2222);

module.exports = app;
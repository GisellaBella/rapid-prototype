// server.js
var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var request = require("request");
/************
 * DATABASE *
 ************/
var db = require('./models');
/**********
 * ROUTES *
 **********/
// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
var routes = require('./config/routes');
app.use(routes);
app.use(express.static('public'));
app.use(express.static(__dirname + '/public')); 
app.set('views', './views');


/*
 * HTML Endpoints
 */
app.get('/', function homepage(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/
// listen on port 8080
app.listen(process.env.PORT || 8080, function () {
  console.log('Express server is up and running on http://localhost:8080/');
});

/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

/**
 * Create Express App
 */
var app = exports.app = express();

/**
 * Configure Express Middleware
 */
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

require ('./routes');  //IMPORTANT! Routes requires app configuration so do this after app has been been configured.

/**
 * Create the HTP Web Server using Express and Listen
 */
http.createServer (app).listen (app.get ('port'), function () {
  console.log ("Express server is running. Point your browser to http://localhost:" +  app.get ('port'));
});


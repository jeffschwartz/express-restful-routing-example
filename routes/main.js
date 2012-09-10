/**
 * GET home page.
 */
var app = require ("../app").app;

app.get ('/', function (req, res) {
  console.log ('request being handled by: get /');
  res.end("request being handled by: get /");
});

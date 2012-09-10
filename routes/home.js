/**
 * GET home page.
 */
var app = require ("../app").app;

app.get ('/home', function (req, res) {
  console.log ('request being handled by: get /home');
  res.end("request being handled by: get /home");
});

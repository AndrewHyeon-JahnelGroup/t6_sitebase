var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.post('/send', function(req, res) {
  //mailgun apikey
  var api_key = 'key-62efd83a901aa07ef626c1aad9d9ba74';
  //mailgun domain
  var domain = 'sandboxc4b09ff7bf6d49738e53add90ddb43a0.mailgun.org';

  var mg = new mailgun({
    apiKey: api_key,
    domain: domain
  });
  //Your sending email address
  var from_who = 'postmaster@sandboxc4b09ff7bf6d49738e53add90ddb43a0.mailgun.org';
  //data formatted form mailgun
  var mgdata = JSON.parse(req.query.data)
  mgdata.sender = from_who

  mg.messages().send(mgdata, function(error, body) {
    console.log(body)
  })
})

var PORT = process.env.PORT || 4000;

app.listen(PORT);
console.log('server started '+ PORT);
module.exports = app;

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();

app.use(express.static(path.join(__dirname, '../dist')));
var PORT = process.env.PORT || 4000;

app.listen(PORT);
console.log('server started '+ PORT);
module.exports = app;

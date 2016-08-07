/*eslint-env node */

/*globals express */

var express = require('express');
var app = express();
var port = process.env.PORT || 8081;
app.use(express.static('app'));
app.listen(port);

console.log("Rodando na porta: " + port);

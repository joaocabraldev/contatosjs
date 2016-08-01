/*eslint-env node */

/*globals express */

var express = require('express');
var app = express();
app.use(express.static('dist'));
app.listen(process.env.PORT || 8081);

console.log("Rodando na porta: " + process.env.PORT || 8081);
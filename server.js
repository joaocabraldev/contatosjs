/*eslint-env node */

/*globals express */

var express = require('express');
var app = express();
app.use(express.static('dist/app'));
app.listen(process.env.PORT || 8081);

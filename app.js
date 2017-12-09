/**
 * Created by Gary on 12/10/2017.
 */
var express = require('express');

var app = express();

var port = 5000;
app.listen(5000, function (err) {
    console.log('running server on port ' + port);
});
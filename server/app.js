/**
 * Created by kroll on 16/6/28.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var mongoose = require("mongoose");
mongoose.connect('mongodb://10.1.204.73:27017/tc_project');

var ProjectCtrl = require('./ctrl/projectCtrl');
var AutoId = require('./models/AutoId');


/* router */
app.all('/listProject',ProjectCtrl.listProject);
app.all('/addProject',ProjectCtrl.addProject);
// app.get('/getId',AutoId.getId);


/* listen */
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
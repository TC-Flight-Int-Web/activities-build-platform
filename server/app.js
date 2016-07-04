/**
 * Created by kroll on 16/6/28.
 */
var express = require('express');
var bodyParser = require('body-parser');
var ProjectCtrl = require('./ctrl/projectCtrl');
var AutoId = require('./models/AutoId');

var mongoose = require("mongoose");
mongoose.connect('mongodb://10.1.204.73:27017/tc_project');
/**
 * init autoId
 */
AutoId.find(function (err, autoList) {
    console.log(`init autoId autoList.length= ${autoList.length}`);

    if(autoList.length > 0 )return;

    new AutoId({
        autoId:1
    }).save();
});


var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(function(req,res,next){
    console.log(`[${new Date()}]  
                    ip = ${req.ip}
                    method = ${req.method} 
                    url = ${req.url} 
                    body = ${JSON.stringify(req.body)} 
                    param = ${JSON.stringify(req.params)} 
                    query = ${JSON.stringify(req.query)}`);
    next();
});

/* router */
app.all('/listProject',ProjectCtrl.listProject);
app.all('/addProject',ProjectCtrl.addProject);
app.get('/getId',AutoId.getId);

/* listen */
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
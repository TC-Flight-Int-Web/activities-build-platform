/**
 * Created by kroll on 16/6/28.
 */
var express = require('express');
var bodyParser = require('body-parser');
var domain = require('domain');

/* controller */
var ProjectInfoCtrl = require('./ctrl/ProjectInfoCtrl');
var AutoIdCtrl = require('./ctrl/AutoIdCtrl');

/* models */
var AutoId = require('./models/AutoIdInfo');

/* utils */
var rh = require('./utils/ResultHelp');
var config = require('./utils/config');

/* db */
var mongoose = require("mongoose");
mongoose.connect(`mongodb://${config.dbPath}/${config.dbName}`);

/**
 * init autoId
 */

AutoId.AutoIdInfo.findOne(function (err, autoList) {
    if (autoList && autoList.length > 0)return;
    new AutoId.AutoIdInfo({autoId: 1}).save();
});


var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log(`[${new Date()}]  
                    ip = ${req.ip}
                    method = ${req.method} 
                    url = ${req.url} 
                    body = ${JSON.stringify(req.body)} 
                    param = ${JSON.stringify(req.params)} 
                    query = ${JSON.stringify(req.query)}`);


    var d = domain.create();
    //监听domain的错误事件
    d.on('error', function (err) {
        console.log(`domain error ${err}`);
        res.statusCode = 500;
        res.json(rh.error(rh.ResultCode.SERVERERROR,"服务器异常"));
        d.dispose();
    });

    d.add(req);
    d.add(res);
    d.run(next);
});

/* router */
app.all('/listProject', ProjectInfoCtrl.listProject);
app.all('/addProject', ProjectInfoCtrl.addProject);
app.get('/test/getId', AutoIdCtrl.getTestId);

app.use(function(req,res){
    res.status(404);
    res.send(rh.error(rh.ResultCode.FOURZEROFOUR),"404 - Not Found");
});

app.use(function(req,res){
    res.status(500);
    res.send(rh.error(rh.ResultCode.SERVERERROR),"500 - Server Error");
});

/* listen */
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`app listening at http://${host}:${port}`);
});
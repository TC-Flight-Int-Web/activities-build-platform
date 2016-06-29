/**
 * Created by kroll on 16/6/28.
 */


var models = require('../models/ProjectInfo');

exports.addProject = function(req,res){
    var instance = new models.ProjectInfo({
        projectName : "张三",
        projectId : 1,
        beginDatetime : "2016-11-11",
        endDatetime : "2016-12-12",
        state : 1
    });

    instance.save(function (err) {
        var response = {
            result:false
        };
        if(err){
            console.log(err.stack);
        }else{
            console.log("save success");
            response.result = true;
        }
        res.send(JSON.stringify(response));
    });
};

exports.listProject = function (req,res) {
    models.ProjectInfo.find(function(err,docs){
        console.log(`${docs}`);
        res.send(docs);
    });
};
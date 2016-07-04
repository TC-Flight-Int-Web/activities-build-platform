/**
 * Created by kroll on 16/6/28.
 */


var models = require('../models/ProjectInfo');
var autoId = require('./autoIdCtrl');

exports.addProject = function(req,res){
    autoId.getId(function(id){
        console.log(`id=${id}`);
        if(id){

            var instance = new models.ProjectInfo({
                projectName : req.body.projectName,
                projectId : id,
                beginDatetime : req.body.beginDatetime,
                endDatetime : req.body.endDatetime,
                state : 1
            });

            console.log(`instance = ${instance}`);

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
        }else{
            var response = {result:false};
            res.send(response);
        }
    });
};

exports.listProject = function (req,res) {
    models.ProjectInfo.find(function(err,docs){
        console.log(`${docs}`);
        res.send(docs);
    });
};
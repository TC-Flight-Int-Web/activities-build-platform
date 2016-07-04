/**
 * Created by kroll on 16/6/28.
 */

var rh = require('../utils/ResultHelp');
var models = require('../models/ProjectInfo');

var AutoIdCtrl = require('./autoIdCtrl');

exports.addProject = function(req,res){
    var key = rh.valid(["projectName",
        "beginDatetime",
        "endDatetime",
        "templateId"],req.body);
    if(key){
        res.send(rh.error(rh.ResultCode.VALIDPARAMS,"缺少参数" + key));
        return;
    }

    AutoIdCtrl.getId(function(id){
        console.log(`id=${id}`);
        if(id){
            var instance = new models.ProjectInfo({
                projectId : id,
                projectName : req.body.projectName,
                beginDatetime : req.body.beginDatetime,
                endDatetime : req.body.endDatetime,
                templateId : req.body.templateId,
                state : 1 ,
                projectDesc : req.body.projectDesc || "",
                createTime : new Date()
            });
            console.log(`instance = ${instance}`);

            instance.save(function(err) {
                var result = {};
                if(err){
                    console.log(err.stack);
                    result = rh.error(rh.ResultCode.DBOPERATORERROR,"添加失败");
                }else{
                    console.log("save success");
                    result = rh.success(rh.ResultCode.SUCCESS,"添加成功",{projectId:instance.projectId});
                }
                res.send(result);
            });
        }else{
            res.send(rh.error(rh.ResultCode.DBOPERATORERROR,"生成自增id失败"));
        }
    });
};

exports.listProject = function (req,res) {
    models.ProjectInfo.find(function(err,docs){
        console.log(`${docs}`);
        res.send(rh.success(rh.ResultCode.SUCCESS,"查询成功",docs));
    });
};
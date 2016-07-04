/**
 * Created by kroll on 16/7/4.
 * 生成记录
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenerateLog = new Schema({
    //生成编号
    generateLogId : Number,
    //项目编号
    projectId : Number,
    //项目名称
    projectName : String,
    //生成位置,如果可以就是预览位置
    targetUrl: String,
    //创建时间
    createTime: Date
});

exports.ProjectInfo = mongoose.model('GenerateLog', GenerateLog);


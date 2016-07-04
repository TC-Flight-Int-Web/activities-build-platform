/**
 * Created by kroll on 16/6/28.
 * 项目实体表
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectInfo = new Schema({
    //项目编号
    projectId: Number,
    //项目名称
    projectName: String,
    //开始时间
    beginDatetime: String,
    //结束时间
    endDatetime: String,
    //模板编号
    templateId: Number,
    //状态
    state: Number,
    //项目描述
    projectDesc: String,
    //创建时间
    createTime:Date
});

exports.ProjectInfo = mongoose.model('ProjectInfo', ProjectInfo);
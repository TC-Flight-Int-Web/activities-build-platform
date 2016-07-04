/**
 * Created by kroll on 16/7/4.
 * 数据分类表
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SourceClassify = new Schema({
    //分类编号
    classifyId: Number,
    //组编号
    groupId: Number,
    //分类名称
    classifyName: String,
    //分类图标
    classifyIcon: String,
    //分类图片
    classifyImage: String,
    //分类描述信息
    classifyDesc: String,
    //创建时间
    createTime: Date
});

exports.ProjectInfo = mongoose.model('SourceClassify', SourceClassify);


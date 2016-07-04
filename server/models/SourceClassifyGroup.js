/**
 * Created by kroll on 16/7/4.
 * 数据分类组表
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SourceClassifyGroup = new Schema({
    //组编号
    groupId: Number,
    //组名称
    groupName: String,
    //创建时间
    createTime: Date
});

exports.ProjectInfo = mongoose.model('SourceClassifyGroup', SourceClassifyGroup);



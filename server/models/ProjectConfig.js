/**
 * Created by kroll on 16/7/4.
 * 项目配置表
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectConfig = new Schema({
    //项目编号
    projectId: Number,
    //顶部图片资源
    headImageSource: String,
    //底部图片资源
    footerImageSource: String,
    //平台(多平台都好分割) wechat | app
    platform: String,
    //数据来源 ["db","ajax"] 暂时只支持 db , ajax后期研究
    dataSource: String,
    //[ajax]获取资源的url
    getSourceUrl: String,
    //模板编号
    templateId: Number
});

exports.ProjectInfo = mongoose.model('ProjectConfig', ProjectConfig);
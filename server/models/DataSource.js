/**
 * Created by kroll on 16/7/4.
 * 数据信息表
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSource = new Schema({
    //资源编号
    sourceId: Number,
    //项目编号
    projectId: Number,
    //项目名称
    projectName: String,
    //出发地点
    bcName: String,
    //抵达地点
    acName: String,
    //出发时间
    bcDate: String,
    //原始价格
    costPrice: Number,
    //优惠价格
    favourablePrice: Number,
    //描述信息
    desc: String,
    //分类名称  (页面若有tab切换按此字符串切换)
    classifyId: String,
    //微信跳转地址
    wechatLinkUrl: String,
    //app跳转地址
    appLinkUrl:String,
});

exports.ProjectInfo = mongoose.model('DataSource', DataSource);
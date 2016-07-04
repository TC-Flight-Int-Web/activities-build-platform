/**
 * Created by kroll on 16/7/4.
 * 模板配置表
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TemplateConfig = new Schema({
    //模板编号
    templateId: Number,
    //模板名称
    templateName: String,
    //模板代码对应位置
    templateUrl: String,
    //是否可以tab切换
    canTabChange: Boolean,
    //样式配置(都是颜色,背景色。如果有其他需求在修改设计)
    //[{"keyDesc":"按钮文字颜色","keyName":".selectFontColor"},{"keyName":"按钮背景颜色","className":".selectBackgroundColor"}]
    styleConfig: String
});

exports.ProjectInfo = mongoose.model('TemplateConfig', TemplateConfig);
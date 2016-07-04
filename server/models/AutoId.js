/**
 * Created by kroll on 16/6/28.
 * 自增Id
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AutoIdInfo = new Schema({
    //自动增长列
    autoId: Number
});

exports.AutoId = mongoose.model('AutoId', AutoIdInfo);

/**
 * Created by kroll on 16/6/28.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ProjectInfo = new Schema({
    projectId    : Number,
    projectName     : String,
    beginDatetime      : Date,
    endDatetime      : Date,
    state      : Number
});

exports.ProjectInfo = mongoose.model('ProjectInfo', ProjectInfo);
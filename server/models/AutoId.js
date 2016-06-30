/**
 * Created by kroll on 16/6/28.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var AutoIdInfo = new Schema({
    autoId: Number
});

var AutoId = mongoose.model('autoid', AutoIdInfo);
exports.AutoId = AutoId;


AutoId.find(function (err, docs) {
    if (err) {
        console.log(`err=${err.stack}`);
    } else {
        if (docs == '') {
            console.log('docs is empty,begin init');
            var initId = new AutoId({
                autoId:0
            });
            initId.save();
        }

    }
});

exports.getId = function (callback) {
    AutoId.findByIdAndUpdate("57732a130afdf4b50481752c",{$inc:{autoId:1}},function(err,item){
        if (err) {
            console.log(`err=${err.stack}`);
            callback();
        } else {
            if(!item){
                new AutoId({
                    autoId:1
                }).save();
                callback(1);
            }else{
                callback(item.autoId);
            }
        }
    });
};
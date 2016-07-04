/**
 * Created by kroll on 16/7/4.
 */
var autoId = require('../models/AutoId');

exports.getId = function (callback) {
    AutoId.findOne(function(err,item){
        AutoId.update({_id:item._id},{$inc:{autoId:1}},function(){
            console.log(`autoId is ${item.autoId + 1}`);
            callback(item.autoId+1);
        })
    });
};
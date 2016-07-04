/**
 * Created by kroll on 16/7/4.
 */
var AutoId = require('../models/AutoIdInfo');

exports.getId = function (callback) {
    AutoId.AutoIdInfo.findOne(function(err,item){
        AutoId.AutoIdInfo.update({_id:item._id},{$inc:{autoId:1}},function(){
            console.log(`autoId is ${item.autoId + 1}`);
            callback(item.autoId+1);
        })
    });
};

exports.getTestId = function (req,res) {
    AutoId.AutoIdInfo.findOne(function(err,item){
        res.send("Test Id is " + item.autoId);
    });
};
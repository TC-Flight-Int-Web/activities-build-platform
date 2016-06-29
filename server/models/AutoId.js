/**
 * Created by kroll on 16/6/28.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
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

exports.getId = function (req, res) {
    AutoId.find(function (err, docs) {
        if (err) {
            console.log(`err=${err.stack}`);
            res.send(err.message);
        } else {
            res.send(docs);
        }
    });
};
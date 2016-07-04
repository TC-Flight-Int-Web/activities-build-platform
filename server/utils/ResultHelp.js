/**
 * Created by kroll on 16/7/4.
 */
//example
// var ApiResult = {
//     header:{
//         resultCode:"",//0000 | xxxx
//         resultState:false,
//         resultMessage:""
//     },
//     body:{}
// };

exports.ResultCode = {

    "SUCCESS":"0000",
    "FOURZEROFOUR":"0404",
    "SERVERERROR":"0500",

    /**
     *  1xxx 数据库错误
     */
    //数据库操作失败
    "DBOPERATORERROR":"1001",

    /**
     *  2xxx  参数错误
     */
    //2001 缺少参数
    "VALIDPARAMS":"2001",

};

exports.error = function(errorCode,errorMessage){
    if(!errorCode){
        throw "errorCode require not empty";
    }else{
        return {
            header:{
                resultCode:errorCode,
                resultState:false,
                resultMessage:errorMessage || ""
            }
        }
    }
};

exports.success = function(resultCode,message,body){
    if(!resultCode){
        throw "errorCode require not empty";
    }else{
        return {
            header:{
                resultCode:resultCode,
                resultState:true,
                resultMessage:message || ""
            },
            body:body
        }
    }
};

/**
 * 检查参数值 (如果没有 活着 为空的 返回响应的key)
 * @param keys
 * @param source
 * @returns {*}
 */
exports.valid = function(keys,source){
    var r = [];
    for(var i = 0;i<keys.length;i++){
        if(source[keys[i]] == undefined || source[keys[i]] == ""){
            r.push(keys[i]);
        }
    }

    if(r.length>0){
        return r.join(',');
    }
    
    return "";
};
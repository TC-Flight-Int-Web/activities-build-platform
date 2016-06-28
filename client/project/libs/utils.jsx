import $ from 'jquery';

export default {
    test(){
        alert(this._ajax);
    },
    copyObject(param){
        return Object.assign({},param);
    },

    mergerObject(...sources){
        return Object.assign({},...sources);
    },

    get(option){
        return this._ajax('get', option);
    },
    post(option){
        return this._ajax('post', option);
    },

    _ajax(method, option){

        console.group();
        console.log(`ajax request`);
        console.log(`method = ${method}`);
        console.log(`option = ${JSON.stringify(option)}`);
        console.groupEnd();

        return new Promise((resolve, reject) => {
            $.ajax({
                type: method,
                url: option.url,
                data: JSON.stringify(option.param) || "",
                dataType:'json',
                contentType:'application/json',
                success(data){
                    resolve(data.result);
                },
                error(error) {
                    reject(error);
                }
            });
        });
    },

    formatDate(timestamp,format){
        let date = new Date(timestamp);

        let o = {
            "M+" : date.getMonth()+1,                 //月份
            "d+" : date.getDate(),                    //日
            "h+" : date.getHours(),                   //小时
            "m+" : date.getMinutes(),                 //分
            "s+" : date.getSeconds(),                 //秒
            "q+" : Math.floor((date.getMonth()+3)/3), //季度
            "S"  : date.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(format))
            format=format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(format))
                format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return format;
    },

    getQueryString(name){
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return "";
    },

    getApiUrl(apiRoot, action, param){
        let s = "?_=1";
        for (let key in param) {
            s += "&" + key + "=" + param[key];
        }
        return apiRoot + action + s;
    }
};
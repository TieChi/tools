var param = '{"account":"2c371ff57d585835c96c5499a72085ee","areacode":"330100000000","arealevel":"2","areaname":"杭州市","dingdingId":"19385901671225985","token":"b36b878b2b54585abc8b80240055a090","username":"运维_韩俊"}'
var urlEncode = function(param, key, encode) {
    if (param==null) return '';
    var paramStr = '';
    var obj = JSON.parse(param);
    let arr = []
    for (var i in obj) {
        arr.push(i + '=' + obj[i]) 
    }
    paramStr = arr.join('&')
    return paramStr;

}
console.log(urlEncode(param))
/*数组排序的方法：*/
function delSame1(arr) {
    var result = [];
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i])
        };
    };
    return result;
}


function delSame2(arr) {
    var arr = arr.sort();
    var result = [arr[0]];
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        if (arr[i] !== result[result.length - 1]) {
            result.push(arr[i])
        };
    };
    return result;
}


function delSame3(arr) {
    var result=[];
    var obj={};
    var len=arr.length;
    for (var i = 0; i < len; i++) {
    	var key=arr[i];
        if (!obj[key]) {
            result.push(arr[i]);
            obj[key]=1;
        };
    };
    return result;
}

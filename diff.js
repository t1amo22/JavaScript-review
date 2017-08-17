function diff(a, b) {
    var typeofA = whichType(a),
        typeofB = whichType(b);
    if (typeofA === typeofB) {
        //数字，考虑到NaN的type是number
        if (typeofA === "Number" && (a != a && b != b)){
        	return true;
        }
        //如果是数组或者是对象
        if (typeofA == "Object" || typeofA == 'Array') {
            if (Object.keys(a).length === Object.keys(b).length) {
                for (var k in a) {
                    if (a[k] !== b[k]) {
                        return false;
                    }
                }
                return true;
            } else {
                return false;
            }
        }
        //string，number,boolean,null,undefined,symbol
        return a!==b ? false : true;
        
    } else {
        return false;
    }

}

function whichType(val) {
    return Object.prototype.toString.call(val).slice(8, -1);
}


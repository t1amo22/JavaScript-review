var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var n = -1; // 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
var arr = [];
var brr = [];

rl.on('line', function(line) { // javascript每行数据的回调接口
    if (n < 0) { // 测试用例第一行读取n
        n = parseInt(line.trim())
    } else {
        //数组数据读取,把每一行数据放在arr里面
        arr.push(line.trim());
        if (n == arr.length) {
            function delSame(arr) {
                var result = [];
                var len = arr.length;
                for (var i = 0; i < len; i++) {
                    if (result.indexOf(arr[i]) == -1) {
                        result.push(arr[i])
                    };
                };
                return result;
            }
            brr = delSame(arr);

            //排序
            brr = brr.sort(function(a, b) {
                return a - b;
            });

            //输出
            for (var i = 0; i < brr.length; i++) {
                process.stdout.write(brr[i] + "\n");
            }

            // 重新初始化相关变量
            n = -1;
            arr = [];
            result = [];
        };
        // 记录当前读取的行数
        //cur_line += 1;
    }



    // 读取行数结束，此时cur_line=数组长度时，进行排序去重如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
    if (arr.length === cur_line) {
        // 去重


    }
});

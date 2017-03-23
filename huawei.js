


var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function count(n) {
    var result = 0;
    do {
        var x = Math.floor(n / 3);
        var y = n % 3;
        result += x;
        n = x + y;
    } while (x > 0);
    if (n === 2) {
        result++;
    };
    console.log(result);
}
});


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function(data) {
    input += data;
});

process.stdin.on('end', function() {
    input_array = input.split("\n");
    var nLine = 0;

    while (nLine < input_array.length) {
        var line = input_array[nLine++].trim();
        if (line === '') {
            continue;
        }
        var input_arrays = line.split(' ');
        var a = +input_arrays[0];
        var b = +input_arrays[1];
        console.log(a + b);
    }
});


var readline = require('readline');
var num = 0; //初始状态为0，表示还没开始读取
var arr = [],
    brr = [];
var rl = new readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line) {
    if (num == 0) {
        num = line.trim(); /*测试用例第一行读取n*/
    } else {
        //数组数据读取,把每一行数据放在arr里面
        arr.push(line.trim());

        // 读取行数结束，此时n=数组长度时，进行排序去重
        if (num == arr.length) {
            arr = arr.sort(function(a, b) {
                return a - b;
            })

            //去重
            var j = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != arr[i + 1]) {
                    brr[j] = arr[i];
                    j++;
                }
            }
            /*输出*/
            for (var i = 0; i < brr.length; i++) {
                process.stdout.write(brr[i] + "\n");
            }
            // 重新初始化相关变量
            num = 0;
            arr.length = brr.length = 0;
        }
    }
});


// 输入的是一行数据RA，获取这个数据并放在数组里
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var args = [];
rl.on('line', function(str) {
    args.push(str);//读取数据
    rl.close();
});
rl.on('close', function() {
    var arr = args[0].trim().split('');//去空格然后分割成数组['R','A']
    //...对数组进行操作，然后输出
    console.log(result);
}

//输入的是一个数字8
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function count(n) {
    //对n进行操作
    console.log(result);
}
});

//输入了一行数据‘a b’
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
        var line = input_array[nLine++].trim();//读取每一行的数据
        if (line === '') {
            continue;
        }
        var input_arrays = line.split(' ');
        var a = +input_arrays[0];//转化为数字
        var b = +input_arrays[1];
        console.log(a + b);
    }
});

/*输入了多行数据
n（3个）
1
2
3
*/
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

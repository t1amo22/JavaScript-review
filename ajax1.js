//首先检查浏览器是否支持XMLHttpRequest对象。
var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP")
};
var xhr = new XMLHttpRequest();
//可以向URL添加需要发送的数据
//为了鼻渊得到的缓存的结果可以向URL添加一个唯一的id
//xhr.open("GET","demo_get.asp?t=" + Math.random(),true);
xhr.open("GET", "test.php?key1=value1&key2=value2", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var result = xhr.responseText;
    };
}
xhr.send();

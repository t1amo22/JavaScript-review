var arr=[1,2,3,4,5]
arr.map(function(x){
	return x*x
})

delete[arr[0]]

var o={
	name:"furong",
	age:20
}
var o={
	"0":"furong",
	"1":"20"
}
Array.prototype.slice.call(o,0)

Object.keys(o) // ["name", "age"]


var arr=["name", "age"]
0 in arr

var arr=[0,,2,3]
arr[1]


var arr=[0,undefined,1,null]
var str="";
arr.forEach(function(x){
   str+=x;
})
str
var arr=[0,,undefined,1,null]
for(var i in arr){
	str+=arr[i];
}

var arr=[0,,undefined,1,null]
for(var i=0;i<arr.length;i++){
	console.log(arr[i])
}

arr.forEach(function(x){
   console.log(x)
})

for(var i in arr){
	console.log(arr[i])
}

var arr=[0,undefined,2]
1 in arr

var arr=[,,,]
0 in arr

var a={
   '0':"a",
   '1':'b',
   '2':'c'
}

Array.slice(a,0)

var s="abcdef";
Array.prototype.join.call(s,' ')

Array.prototype.filter.call(s,function(x){
	return x==='a';
}).join('')

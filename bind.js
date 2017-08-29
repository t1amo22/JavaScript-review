// 这个函数创建了一个闭包，闭包使用apply调用传入的函数
function  bind(fn,context) {
	return function(){
		return fn.apply(context,arguments)  //arguments对象是闭包的而不是bind的
	}
}

var obj={
	name:"furong",
	sayName:function(){
		console.log(this.name)
	}
}


setTimeout(obj.sayName,1000)  //undefined
setTimeout(obj.sayName.bind(obj),1000)//furong
setTimeout(bind(obj.sayName,obj),1000)//furong
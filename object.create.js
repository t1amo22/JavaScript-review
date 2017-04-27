function Box(){
	this.color="red";
	this.sayColor=function(){
		console.log(this.color);
	}
}

var box=new Box();
var box1=Object.create(box);
console.log(box1)

Object.create=function(obj){
  var F=function(){};
  F.prototype=obj;
  return new F();
}
function curry(fn){
  var args=[].slice.call(arguments,1);
  return function(){
  	 var innerArgs=[].slice.call(arguments);
  	 var allArgs=args.concat(innerArgs);
  	 return fn.apply(null,allArgs)
  }

}


var curryAdd=curry(add,5);
function add(n1,n2){
	return n1+n2;
}

var res=curryAdd(3)  //8
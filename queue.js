function Queue(){
	var items=[];
    
    /*添加一个元素*/
	this.enqueue=function(e){
		items.push(e);
	};
    /*删除一个元素*/
	this.dequeue=function(){
		return items.shift();
	}
	/*返回队列第一个元素*/
	this.front=function(){
		return items[0];
	}
    /*队列空，返回TRUE*/
    this.isEmpty=function(){
    	return items.length==0;
    }
    /*返回队列包含元素的个数*/
    this.size=function(){
    	return items.length;
    }

    this.print=function(){
    	console.log(items.toString());
    }

}


var queue= new Queue();

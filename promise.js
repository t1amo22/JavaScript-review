用promise对象实现AJAX操作
var getJSON=function(url){
	var promise=new Promise(function(resolve,reject){
        //AJAX操作
        $.ajax({
        	url:url,
        	type:'GET',
        	dataType:'json',
        	success:function(data){
                resolve(data);
        	},
        	error:function(xhr,textStatus){
                reject(textStatus);
        	}
        })
	})

	return promise;
}
getJSON('/post.json') /*这里是promise实例对象*/
    /*状态改变时的回调函数*/
    .then(
        //状态从pending进行中——resolved已完成时调用的函数
        function( /*从resolve传过来的数据*/ data) {
            //成功后执行的操作
            console.log(data);
        },
        //状态从pending进行中——rejected失败时调用的函数
        function( /*从reject传过来的数据*/ ) {
            //失败后的操作
            console.log(data);
        }
    )

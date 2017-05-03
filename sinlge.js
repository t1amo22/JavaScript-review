var SingleClass = function(name) {
    this.name = name;
    //标志当前是否已经创建过对象
    this.instance = null;
}

SingleClass.getInstance = function(name) {
    if (!this.instance) {
        return this.instance = new SingleClass(name);
    } else {
        return this.instance;
    }
}


var a = SingleClass.getInstance('a');
var b = SingleClass.getInstance('b');
alert(a === b)


var SingleClass = function(name) {
    this.name = name;
}


SingleClass.getInstance = (function() {
    var instance = null;
    return function(name) {
        if (!instance) {
            return instance = new SingleClass(name);
        } else {
            return instance;
        }
    }
})();





var CreateDiv = (function() {
    var instance = null;
    var CreateDiv = function(html) {
        if (!instance) {
            this.html = html;
            this.init();
            instance = this; //this是实例化的这个对象
        } else {
            return instance;
        }
    }
    CreateDiv.prototype.init = function() {
        var div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    }

    return CreateDiv;
})();

var b = new CreateDiv('b');
alert(a === b)


//代理类
var CreateDiv = function(html) {
    this.html = html;
    this.init();
};
CreateDiv.prototype.init = function() {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
}
var ProxicySingleCreateDiv = (function() {
    var instance = null;
    return function(html) {

        if (!instance) {
            instance = new CreateDiv(html);

        }
        return instance;
    }
})();

var a = new ProxicySingleCreateDiv('a');
var b = new ProxicySingleCreateDiv('b');
alert(a === b)


var user = (function() {
    var name = 'sevn';
    var age = 18;
    return {
        getUserInfo: function() {
            return name + ' ' + age;
        }
    }
})();

惰性单例模式：在需要创建的的时候才创建对象，这种技术在实际开发当中非常的有用
所谓的惰性就是在点击按钮时才创建对象
比如我们的创建弹框的代码封装在一个函数当中，当点击按钮的时候再创建，而不是在页面加载的时候就创建，从而
白白浪费了DOM节点
单例的意思就是如果这个对象已经创建过了，那么直接返回，否则新创建

我们把管理逻辑的代码封装在getSingle函数当中,把创建对象的方法作为参数传入，因为result在闭包中所以不会被销毁
如果在将来的请求当中result已经被赋值那么直接返回这个值
var getSingle = function(fn) {
	var result;
	//把result放在闭包里永远不会被销毁
    return function(fn) {
       /* if (!result) {
            return result = fn.apply(this, arguments);
        } else {
            return result;
        }*/
        //用逻辑或修改，它是一个短路操作符，如果第一个操作符true就不会对第二个操作数求值
        //这里的this值指window，调用了fn
        return result||result=fn.apply(this,argument);
    }
}
//创建弹框的代码
var createLogin=function(){
	var div=document.createElement("div");
	div.innerHTML="弹框";
	document.body.appendChild(div);
	div.style.display="none";
	return div;
}
//保证唯一性
var createSingleLogin=getSingle(createLogin);
//保证惰性
document.getElementById("btn").onclick=function(){
	var login=createLogin();
	login.style.display="block";
}


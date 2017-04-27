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



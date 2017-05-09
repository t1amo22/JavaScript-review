var Caculate = function(level, salary) {
        return strategis[level](salary);
    }
    //把各种算法封装在策略对象中；
var strategis = {
    'S': function(salary) {
        return 4 * salary;
    },
    'A': function(salary) {
        return 3 * salary;
    },
    'B': function() {
        return 2 * salary;
    }
}

alert(Caculate('A', 20000))


var strategis = {
    isEmpty: function(value, errorMsg) {
        if (value == '') {
            return errorMsg;
        }
    },
    minLength: function(value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    isMobile: function(value, errorMsg) {
        if ((!1[3 | 5 | 8][0 - 9] { 9 }
                $).test(value)) {
            return errorMsg;
        }
    }
}

var Validator = function() {
    this.cache = [];//保存校验规则

}

Validator.prototype.add = function(dom, rule, errorMsg) {
    var arr = rule.split(':');
    this.cache.push(function() {
        var strategy = arr.shift();
        arr.unshift(dom.value);
        arr.push(errorMsg);
        return strategis[strategy].apply(dom, arr);
    })
};
Validator.prototype.start = function() {
    for (var i = 0, validateFunc; validateFunc = this.cache[i++];) {
        var msg = validateFunc();
        if (msg) {
            return msg;
        }
    }
}
var ValidateFunc = function() {
    var validator = new Validator;
    //添加一些校验规则
    validator.add(registerForm.userName, 'isEmpty', '用户名不能为空');
    validator.add(registerForm.password, 'isEmpty', '密码不能少于四位');
    validator.add(registerForm.phoneNumber, 'isEmpty', '手机号码格式不正确');
    var errorMsg = validator.start();//获得校验结果
    return errorMsg;
}
registerForm.onsubmit = function() {
    var errorMsg = ValidateFunc();
    if (errorMsg) {
        alert(errorMsg);
        return false;//阻止表单提交
    }
};

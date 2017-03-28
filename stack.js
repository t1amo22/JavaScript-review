function Stack() {
    var items = []; /*用数组保存栈里的元素*/

    this.push = function(e) {
        items.push(e);
    }

    this.pop = function() {
        return items.pop();
    }

    this.peek = function() {
        return items[length - 1];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.size = function() {
        return items.length;
    }

    this.clear = function() {
        items = [];
    }

    this.print = function() {
        console.log(items.toString());
    }

}

function baseConverter(decNumber,base){
    var stack=new Stack();
    var rem,
        binaryString='',
        digits='0123456789ABCDEF';

    while(decNumber>0){
        rem=decNumber%base;
        stack.push(rem);
        decNumber=Math.floor(decNumber/base);
    }

    while(!stack.isEmpty()){
         binaryString+=digits[stack.pop()];
    }

    return binaryString;
}
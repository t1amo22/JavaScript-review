
function Duck(voice){
	this.voice=voice;
	this.sound=function(){
		console.log(this.voice);
	}
}

function Dog(voice){
	this.voice=voice;
	this.sound=function(){
		console.log(this.voice);
	}
}
var duck=new Duck('gagaga');
var dog=new Dog('wangwangwang');

var  makeSound=function(animal){
    if (animal.sound instanceof Function) {
 		animal.sound();
    } 
}

makeSound(duck)
makeSound(dog)
var memory=window.localStorage||
           (window.UserDataStorage&& new UserDataStorage())||
           new cookieStorage();
/*然后在对应的机制中查村数据*/
var value=memory.getItem("name");

localStorage.x=10;
var x=parseInt(localStorage.x);

localStorage.setItem("x",10);
localStorage.getItem("x");

var name="";
var value="";
for (var i = 0; i < localStorage.length; i++) {
	name = name+";"+localStorage.key(i);
	value=value+";"+localStorage.getItem(name);
};
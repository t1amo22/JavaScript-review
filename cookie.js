function setCookie(name,value,path,domain,expires,secure){
	var cookie=name+"="+encodeURIComponent(value);
	if (expires instanceof Date) cookie+="; expires="+expires.toGMTString();
	if (path) cookie+="; ="+path;
	if (domain) cookie+="; domain="+domain;
	document.cookie=cookie;

}

function getCookie(){
	var cookie={};

	var all=document.cookie;
	if (all===null) return cookie;
	var list=all.split("; ");

	for (var i = 0; i < list.length; i++) {
	     
		var p=list[i].indexOf("=");

		var name=list[i].substring(0,p);
		var value=list[i].substring(p+1);
		value=decodeURIComponent(value);
		cookie[name]=value;
	}
	return cookie;
}

function delCookie(name,path,domain,secure){
	//必须要设置成相同的域和路径才可以
	var cval=getCookie().name;
	if (cval!=null) {
		document.cookie=name+"="+cval+ "; max-age=0";
	};
}

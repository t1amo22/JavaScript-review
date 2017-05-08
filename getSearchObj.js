function getSearchObj(){
	var qs=location.search.length>0?location.search.subString(1):'',
	    obj={},
	    items=qs.length>0?qs.split('&') : [],
	    item=null;
	    name='',
	    value='',
	    i=0;
	    len=items.length;
	for (var i = 0; i < len; i++) {
		item=items[i].split('=');
		name=decodeURIComponent(item[0]);
		value=decodeURIComponent(item[1]);
	    obj[key]=value? value : undefined;
	}
	return obj;

}
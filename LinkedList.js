function  LinkedList(){
   var Node=function(val){
   	  this.val=val;
   	  this.next=null;
   }

   var length=0;
   var head=null;

   this.append=function(val){
      var node=new Node(val),
          current;
      if (head==null) {
      	head=node;
      }else{
      	current=head;

      	while(current.next){
      		current=current.next;
      	}

      	current.next=node;
      }

      length++;
   };

   this.removeAt=function(pos){
   	  if (pos>-1 && pos<length) {
        var current=head,
        	previous,
        	index=0;

        if (pos===0) {
           head=current.next;
        }else{
        	while(index++<pos){
                previous=current;
                current=current.next;
        	}
        	length--;
        	previous.next=current.next;
        }
   	  }else{
   	  	return null;
   	  }
   };

   this.insertAt=function(pos,val){
	   	if (pos>=0 && pos <=length) {
	   		var node=new Node(),
	   		    current=head,
	   		    previous,
	   		    index=0;

	        if (pos===0) {
	            head=node;
	        }else{
	        	while(index++<pos){
	        		previous=current;
	        		current=current.next;
	        	}
	        	node.next=current;
	        	previous.next=node;
	        }
	        length++;
	        return true;
	   	}else{
	   		return null;
	   	}
   };

}
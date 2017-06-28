//二叉搜索树是一种特殊的二叉树， 相对较小的值保存在左节点中， 较大的值保存在右节点中
// 这一特性查找的效率很高，包括数值和非数值的数据
function BinarySearchTree() {
	var Node = function(key){
		this.key=key;
		this.left=null;
		this.right=null;
	}

	var root=null;

	var insertNode=function(node,newNode){
          if (node.key>newNode.key) {
               if (!node.left) {
               	  node.left = newNode;
               }else{
               	  insertNode(node.left,newNode)
               }
          }else{
          	  if (!node.right) {
               	  node.right = newNode;
               }else{
               	  insertNode(node.right,newNode)
               }
          }
	}

	this.insert=function(key){
        var newNode=new Node(key);
        if (!root) {
        	root=newNode;
        }else{
        	insertNode(root,newNode)
        }
	}
有三种遍历 BST 的方式： 中序、 先序和后序。

中序遍历：是一种从小到大访问二叉搜索树BST的遍历方式
应用：对树进行排序操作
给binary search tree 添加一个inorder traverse方法，这个方法接受一个callback参数
回调函数定义了我们对访问到的节点的操作 比如打印
在函数体内调用inorder traverse Node 方法，这是一个递归函数：在函数内部调用自身，有两个参数，
一个是节点，还有一个回调函数
首先检查以参数传入的节点是不是null,这是停止递归的判断条件
然后递归调用相同的函数访问左子点，接着对这个节点进行callback操作，然后再访问右侧节点

    var inorderTraverseNode=function(node,callback){
         if (node != null) {
         	inorderTraverseNode(node.left,callback);
         	callback(node.value);
         	inorderTraverseNode(node.right,callback);
         }
    }


    this.inorderTraverse=function(callback){
        inorderTraverseNode(root,callback)
    }

先序遍历：以优先于后代节点的顺序访问每个节点
和中序遍历不同的是先访问节点本身然后访问左子点
应用：打印结构化的文档

   
    var preorderTraverseNode=function(node,callback){
         if (node != null) {
         	callback(node.value);
         	inorderTraverseNode(node.left,callback);
         	inorderTraverseNode(node.right,callback);
         }
    }

    this.preorderTraverse=function(callback){
        preorderTraverseNode(root,callback)
    }
后序遍历是先访问节点后代子点，然后再访问节点本身
应用：计算一个目录 和他的子目录中 所有文件所占空间的大小
    
    var postorderTraverseNode=function(node,callback){
         if (node != null) {
         	inorderTraverseNode(node.left,callback);
         	inorderTraverseNode(node.right,callback);
         	callback(node.value);
         }
    }

    this.postorderTraverse=function(callback){
        postorderTraverseNode(root,callback)
    }
搜索树中的值
搜索最小值：在最左端
方法：沿着树的左端进行遍历，直到找到最左端的节点

    var minNode=function(node){
        if (node) {
           while(node && node.left!=null){
              node=node.left;
           }
           return node.key;
        }
        return null;
    }

	this.min=function(){
        return minNode(root);
	}

搜索最大值：在最左端
方法：沿着树的右端进行遍历，直到找到最右端的节点
    
    var maxNode =function(node){
       if (node) {
       	 while(node && node.right !=null){
       	 	node=node.right;
       	 }
       	 return node.key;
       }
       return null;
    }


    this.max=function(){
    	return maxNode(root);
    }

搜索特定值
    
    var findNode=function(node,key){
       if (!node) {
       	 return false;
       }
       if (node.key < key) {
       	  findNode(node.left,key);
       }else if (node.key > key) {
       	  findNode(node.right,key);
       }else{
       	  return true;
       }
    } 


   this.find=function(key){
        findNode(root,key);
   }

}

var tree = new binarySearchTree();

tree.inorderTraverse(printNode);
function printNode(value){
    console.log(value)
}
//Implementing post Order Traversal in Binary Tree (DFS)..

class Tree{
  constructor(data){
    this.left = null;
    this.data = data;
    this.right = null;
  }

  postOrder(node) {
    if(node === null){
      return;
    }
    //left right root
    this.postOrder(node.left); //left subtree traversal
    this.postOrder(node.right); //right subtree traversal
    console.log(node.data); 
  }
}

let rootNode = new Tree(1);
rootNode.left = new Tree(2);
rootNode.right = new Tree(3);
rootNode.left.left = new Tree(4);
rootNode.left.right = new Tree(5);
rootNode.right.left = new Tree(6);
rootNode.right.right = new Tree(7);

rootNode.postOrder(rootNode);

//Output: 4 5 2 6 7 3 1

//Time Complexity: O(n);
//Space Complexity: O(n);



//preorder traversal in binary tree 

class Tree{
  constructor(data){
    this.left = null;
    this.data = data;
    this.right = null;
  }

  preOrder(node){
    if(node === null){
      return;
    }
    console.log(node.data);
    this.preOrder(node.left); //traverse left subtree
    this.preOrder(node.right); //traverse right subtree
  }
}

let rootN = new Tree(1);
rootN.left = new Tree(2);
rootN.right = new Tree(3);
rootN.left.left = new Tree(4);
rootN.left.right = new Tree(5);
rootN.right.left = new Tree(6);
rootN.right.right = new Tree(7);

rootN.preOrder(rootN);

//Time Complexity: O(n), Space Complexity: O(n), O(log n) in best case

//output:
// 1
// 2
// 4
// 5
// 3
// 6
// 7
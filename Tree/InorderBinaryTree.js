//Implementing Inorder traversal in binary tree (DFS)..

class TreeNode{
  constructor(data){
    this.left = null;
    this.data = data;
    this.right = null;
  }

  //left root right order..
  inOrderTraversal(node){
    if(node === null){
      return;
    }
    this.inOrderTraversal(node.left); //traversing left subtree
    console.log(node.data); //log the data when subtree complete its traversal..
    this.inOrderTraversal(node.right); //traversing right subtree
  }
}

let rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);
rootNode.right.left = new TreeNode(6);
rootNode.right.right = new TreeNode(7);

rootNode.inOrderTraversal(rootNode);

//Time Complexity: O(n)
//Space Complexity: O(n) , in best case(when tree is balanced/skew) O(log n)

// output:
// 4
// 2
// 5
// 1
// 6
// 3
// 7

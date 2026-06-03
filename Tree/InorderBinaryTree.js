//Implementing Inorder traversal in binary tree..

class TreeNode{
  constructor(data){
    this.left = null;
    this.data = data;
    this.right = null;
  }

  inOrderTraversal(node){
    if(node === null){
      return;
    }
    this.inOrderTraversal(node.left);
    console.log(node.data);
    this.inOrderTraversal(node.right); //left root right order..
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

// output:
// 4
// 2
// 5
// 1
// 6
// 3
// 7

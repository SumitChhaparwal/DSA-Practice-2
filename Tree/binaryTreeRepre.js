//Structure of binary tree..

class TreeNode{
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(root);

// Output: binary tree=
// TreeNode {
//   left: TreeNode {
//     left: TreeNode { left: null, data: 4, right: null },
//     data: 2,
//     right: TreeNode { left: null, data: 5, right: null }
//   },
//   data: 1,
//   right: TreeNode {
//     left: TreeNode { left: null, data: 6, right: null },
//     data: 3,
//     right: TreeNode { left: null, data: 7, right: null }
//   }
// }
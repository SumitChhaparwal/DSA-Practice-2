//Calculating height of binary tree ..

class TreeN{
  constructor(data){
    this.left = null;
    this.data = data;
    this.right = null;
  }

  calcHeight(node){
    if(node === null){
      return 0;
    }
    let leftH = this.calcHeight(node.left);
    let rightH = this.calcHeight(node.right);
    return Math.max(leftH, rightH)+1;
  }
}

//creating binary tree
let root = new TreeN(1);
root.left = new TreeN(2);
root.right = new TreeN(3);
root.left.left = new TreeN(4);
root.left.right = new TreeN(3);
root.right.left = new TreeN(6);
root.right.right = new TreeN(8);

let finalHeight = root.calcHeight(root);
console.log("Height of binary tree: ", finalHeight);

//Time complexity: O(n), Space Complexity: O(n);
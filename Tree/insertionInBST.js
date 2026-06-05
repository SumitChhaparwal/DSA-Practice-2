//Inserting node in binary search tree (BST);

class bTree {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

//Inserting node in binary search tree..
var root = null;
function insert(data) {
  root = insertRec(root, data);
}

function insertRec(root, data) {
  if (root === null) {
    root = new bTree(data);
    return root;
  }

  if (data < root.data) {
    root.left = insertRec(root.left, data);
  } else if(data > root.data){
    root.right = insertRec(root.right, data);
  }

  return root;
}

//Inorder traversing of BST..
function traversalB(root){
  if(root === null){
    return;
  }
  traversalB(root.left);
  console.log(root.data);
  traversalB(root.right);
}

insert(36);
insert(35);
insert(38);
insert(43);
insert(41);

traversalB(root);

//Output: 35 36 38 41 43

//TimeComplexity: bestCase: O(log n), worstCase: O(n)

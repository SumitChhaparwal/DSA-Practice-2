//searching value in binary search tree (BST)..

class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

var root = null;
function insert(val) {
  root = insertRec(root, val);
}

function insertRec(root, val) {
  if (root === null) {
    root = new Node(val);
    return root;
  }
  if (val < root.data) {
    root.left = insertRec(root.left, val);
  } else {
    root.right = insertRec(root.right, val);
  }
  return root;
}

insert(40);
insert(38);
insert(39);
insert(33);
insert(43);
insert(45);

function searhIn(root, key) {
  if (root === null || root === undefined || root.data === key) {
    return root;
  } 
  if (key < root.data) {
    return searhIn(root.left, key);
  } else {
    return searhIn(root.right, key);
  }
}
let searchVal = searhIn(root, 47);
searchVal ? console.log("Value Found..") : console.log("Not Found!");

//TC: inBestCase-O(1), inAvgCase-O(log n), WorstCase-O(n)
//SC: worstCase-O(h) (n/h-tree height)

//reverse linkedlist

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let headN = new Node(33);

//using for loop to create multiple nodes
let newNode;
function push(val) {
  for (i = val; i > 0; i--) {
    newNode = new Node(i);
    newNode.next = headN;
    headN = newNode;
  }
}
push(5);

//reversing ll
function reverseList() {
  let newNode; //to store next node
  let currentNode = headN;
  let prev = null;
  while (currentNode !== null) {
    newNode = currentNode.next;
    currentNode.next = prev; //reversing nodes in ll ex: third <- second <- first <- head <-null(prev)
    prev = currentNode;
    currentNode = newNode;
  }
  return prev; //now prev is head node
}


let newHead = reverseList();
//traversing
function displayR() {
  let currentNode = newHead;
  while (currentNode != null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}
displayR();

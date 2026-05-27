//Implementing doubly/two way linkedlist..

class Node{
  constructor(data){
    this.previous = null;
    this.data = data;
    this.next = null;
  }
}

//node creation
let headNode = new Node(2);
let firstNode = new Node(5);
let secondNode = new Node(9);

//conneting doubly linkedlist nodes
headNode.next = firstNode;
firstNode.previous = headNode;
firstNode.next = secondNode;
secondNode.previous = firstNode;

//adding node at beginning
function addAtBegin(val){
  let newNode = new Node(val);
  newNode.next = headNode;
  headNode.previous = newNode;
  headNode = newNode;
}
addAtBegin(6);
addAtBegin(8);

//traversing
function displayD(){
  let currentNode = headNode;
  while(currentNode !== null){
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}
displayD();
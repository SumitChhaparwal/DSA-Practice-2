//Insertion in linked list ..
// Types of Insetion:
// * at beginning of LL
// * at end of LL
// * at specific location of LL

//creating linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let headNode = new Node(5);
let firstNode = new Node(2);
let secondNode = new Node(1);
let thirdNode = new Node(8);

headNode.next = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;


//*Inserting node at beginning of Linkedlist..
function insertAtB(val) {
  let newNode = new Node(val);
  newNode.next = headNode;
  headNode = newNode;
}
insertAtB(23);
insertAtB(6);
//Time Complexity: O(1)
//Space Complexity: O(1)


//*Inserting node at specific position in Linkedlist..
function insertAtSpecificPosition(previousNode, val) {
  let newNode = new Node(val);
  newNode.next = previousNode.next;
  previousNode.next = newNode;
}
insertAtSpecificPosition(firstNode, 21);
//Time Complexity: O(1)
//Space Complexity: O(1)


//*Inserting node at end of linkedlist..
function insertAtEnd(val) {
  let newNode = new Node(val);
  let pointer = headNode;
  while(pointer.next !== null){
    pointer = pointer.next;
  }
  pointer.next = newNode;
}
insertAtEnd(15);
//Time Complexity: O(n)
//Space Complexity: O(1)


//displaying updates
function displayU(head) {
  let currentNode = head;
  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}
displayU(headNode);

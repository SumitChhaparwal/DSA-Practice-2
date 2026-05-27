//Creating and Traversing singly linkedlist:

//setting blueprint for creating node obj.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; //by default value for node..
  }
}

//creating nodes from head to end node..
const head = new Node(2);
const first = new Node(3);
const second = new Node(5);
const third = new Node(8);

//connecting..
head.next = first;
first.next = second;
second.next = third;

//traversing created linkedlist..
function traverseL(head) {
  let nextPointer = head;
  while(nextPointer !== null){
    console.log(nextPointer.data);
    nextPointer = nextPointer.next;
  }
}
traverseL(head);

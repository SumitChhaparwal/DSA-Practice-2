//Deletion in Linkedlist..

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
let hNode = new Node(3);
let fNode = new Node(5);
let sNode = new Node(4);
let tNode = new Node(9);

hNode.next = fNode;
fNode.next = sNode;
sNode.next = tNode;

//*at beginning
function deleteFromFront(){
  let temp = hNode;
  hNode = hNode.next;
  temp = null; //clear space
}
deleteFromFront();

//*at ending
function deleteFromEnd(){
  let pointer = hNode;
  //edge cases 
  if(hNode == null){
    console.log("linked list is empty");
    return;
  }
  if(hNode.next == null) {
    console.log("only have one node..");
    return;
  }

  //using forloop to find previous node of last node
  while(pointer.next.next !== null){
    pointer = pointer.next;
  }
  let temp = pointer.next;
  pointer.next = null; 
  temp = null; //to clear space
}
deleteFromEnd();


//display function
function displayFun() {
  let pointer = hNode;
  while(pointer != null){
    console.log(pointer.data);
    pointer = pointer.next;
  }
}
displayFun();

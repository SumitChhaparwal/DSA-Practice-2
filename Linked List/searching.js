//perform searching in a linkedlist..

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

//creating node
const head = new Node(2);
const first = new Node(5);
const second = new Node(7);

//conneting
head.next = first;
first.next = second;

//searching val in linkedlist..
function searchFun(head, val){
  let pointer = head;
  while(pointer !== null){
    if(pointer.data === val){
      return true;
    } 
    pointer = pointer.next;
  }
  return false;
}
const finalR = searchFun(head, 7);
finalR ? console.log("Value is found in linkedlist.") : console.log("Value is not found.");

//Time complexity: O(n)
//Space complexity: O(1)
//finding middle node of linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let headN = new Node(3);
let firstN= new Node(4);
let secondN = new Node(9);
let thirdN = new Node(2);
let fourthN = new Node(6);

headN.next = firstN;
firstN.next = secondN;
secondN.next = thirdN;

let mid = headN;
let count = 1;
//middle node fun();
function findMiddle() {
  while(headN.next !== null){
    headN = headN.next;
    count++;
    if(count % 2 == 0){
      mid = mid.next;
    }
  }
  return mid;
}
const finalR = findMiddle();
console.log("Middle node of LL: ", finalR);

//Time Complexity: O(n)
//Space Complexity: O(1)
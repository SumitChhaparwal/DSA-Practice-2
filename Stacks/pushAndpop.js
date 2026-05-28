//Adding and Removing elements in stacks using array(Array implementation of stacks)
let arr = new Array(6);
let length = arr.length - 1;
let top = -1;

//funtion to add a element in stacks
function push(data) {
  top++;
  if (top > length) {
    console.log(`Data cannot be add due to stack overflow..`);
    top--;
    return;
  }
  arr[top] = data;
}
push(2);
push(4);
push(6);
push(1);
push(6);
push(11);
//Time Complexity: O(1)
//Space Complexity: O(n)

//function to remove a element in stacks
let x =0;
function pop() {
  if(top < 0){
    console.log("stack is empty..");
    return false;
  }
  x = arr[top];
  top--;
  return x;
}
pop();
pop();
pop();
//Time Complexity: O(1)
//Space Complexity: O(n)

function traverse() {
  for (let i = top; i >= 0; i--) {
    console.log(arr[i]);
  }
}
traverse();

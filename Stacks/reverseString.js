//using stack (implementation of array) to reverse string value..

class Stack {
  constructor(data) {
    this.top = -1;
    this.length = data;
    this.arr = new Array(this.length);
  }

  push(data) {
    this.top++;
    if (this.top > this.length - 1) {
      console.log("stack is overflow..");
      this.top--;
      return;
    }
    this.arr[this.top] = data;
  }

  pop() {
    if (this.top < 0) {
      console.log("stack is empty..");
    }
    let x = this.arr[this.top];
    this.top--;
    return x;
  }
}

function reverseStr(str) {
  let strStack = new Stack(str.length);
  let rString = "";
  for (let i = 0; i < str.length; i++) {
    strStack.push(str[i]);
  }
  for (let j = 0; j < str.length; j++) {
    rString = rString.concat(strStack.pop());
  }
  return rString;
}
let reversed = reverseStr("recursion");
console.log("Revered string is: ", reversed);

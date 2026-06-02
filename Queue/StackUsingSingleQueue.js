//Implementing stack using single queue..

class Stack{
  constructor(){
    this.q1 = [];
  }

  push(val){
    this.q1.push(val);
    let length = this.q1.length;
    for(let i=0; i<length-1; i++){
      this.q1.push(this.q1.shift()); // add2 [1] [1,2] [2,1] 
    }
  }

  pop(){
    if(this.q1.length === 0){
      return "Queue is empty";
    }
    let val = this.q1[0];
    this.q1.shift();
    return val;
  }

  top(){
    if(this.q1.length === 0){
      return;
    }
    return this.q1[0];
  }

  traverse(){
    for(let i=0; i<this.q1.length; i++){
      console.log(this.q1[i]);
    }
  }
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.traverse();
//Time Complexity: O(n)
//Space Complexity: O(n)

stack1.pop();
console.log("peek value: ",stack1.top());
stack1.traverse();
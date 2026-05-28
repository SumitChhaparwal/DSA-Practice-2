//performing all operations like top(), isEmpty(), isFull() 
let arr2 = new Array(4);
let top = -1;
let length = arr2.length -1;

function push(data){
  top++;
  if(top > length){
    console.log("stack is overflow.");
    top--;
    return;
  }
  arr2[top] = data;
}
push(6);
push(2);
push(1);
push(7);
push(1);

//toplevel fun()
function topFun(){
  if(top < 0){
    return false;
  } else{
    return arr2[top];
  }
}
console.log("top element of stack is ", topFun());

//isEmpty fun()
function isEmpty(){
  if(top < 0){
    return true;
  } else{
    return false;
  }
}
console.log("is Empty: ", isEmpty());

//isFull fun()
function isFull(){
  if(top >= length){
    return true;
  } else{
    return false;
  }
}
console.log("is Full: ", isFull());


function displayVal(){
   for(let i=top; i>=0; i--){
    console.log(arr2[i]);
   }
}
displayVal();
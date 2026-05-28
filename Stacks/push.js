//Adding element in stacks using array(Array implementation of stacks)

let arr = new Array(6);
let length = arr.length-1;
let top = -1;

function push(data){
  top++;
  if(top > length){
    console.log(`Data cannot be add due to stack overflow..`);
    console.log("only add by replacing existing value..");
    top--;
    return;
  }
  arr[top] = data;
}
push(2);
push(4);
push(6);
push(1);

function traverse(){
  for(let i=top; i>=0; i--){
    console.log(arr[i]);
  }
}
traverse();
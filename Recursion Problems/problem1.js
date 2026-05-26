// Using recursion to print numbers from 1 to n without loop..

function printNum(n) {
  if(n > 0){
    printNum(n-1);
    console.log(n);
  }
}
printNum(20);
//Time Complexity: O(n)
//Space Complexity: O(n)  Recursion takes more space than loop..


//callstack:
// printNum(1) end
// printNum(2)
// printNum(3)
// printNum(4)
// printNum(5) start

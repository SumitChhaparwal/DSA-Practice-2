//calculating sum of numbers from 1 to n.. using recursion.

function sumOfNum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumOfNum(n - 1);
}

let sum = sumOfNum(5);
console.log("Sum of numbers:",sum);

//Time complexity: O(n)
//Space complexity: O(n)
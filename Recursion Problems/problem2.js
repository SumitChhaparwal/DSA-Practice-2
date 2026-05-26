//using recursion to find factorial of numbers..
//6 = 6*5*4*3*2*1 = 720f
function facto(n) {
  if (n == 1) {
    return 1; // its must return 1 otherwise it will give NaN result..
  }
  return n * facto(n - 1);
}
const factoNo = facto(6);
console.log("Factorial of Num: ", factoNo);

// Time Complexity: O(n)
// Space Complexity: O(n)
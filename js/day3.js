/*
  Comparison operator

  1. == : equal to (value type and value)
  2. === : equal to (value type and value) but not equal to null or undefined
  3. > : greater than
  4. < : less than
  5. >= : greater than or equal to
  6. <= : less than or equal to
7. != Not Equel
  8. !== 
  Note: == and === are used for comparing values. If you want to compare values and types, use ===.

*/

let a="30";
let b=30;

// console.log("Greater Than ",a>b);
// console.log("Less Than ",a<b);
// console.log("Less Than Or Equal to ",a<=b);
// console.log("Greater  Than Or Equal to ",a>=b);
// console.log("Comparison ",a==b);
// console.log("Not equal to ",a!=b);
// --> For Check The Data Type in the JS --> typeof a
console.log("== ",a==b);
console.log("===",a===b);

console.log("Data Type of A is ",typeof a);
console.log("Data Type of B is ",typeof b);

// !==

// ==
// 1. It will Check only for Value 
// --> value --> true
// ===
// 1. It will check Value --> true 
// 2. It will check Data Type --> false
// --> value+data type   --> false

// console.log("Special Operator ")


// Function 

// Conditional Statement 

// let a = 20;
// let b = 30;
// Fisrt Way to Declare Function in JavaScript Normal Function

/*
function Sum() {

    console.log("Sum of Both Number is ", a + b)
}


Sum();
Sum();
Sum();

*/

// Second Way to Declare Function 
/*
let Sum =function(){
    console.log("Sum of Both Number is ", a + b)
}

Sum();
Sum();
*/


// Third Way to Declare Function with Arrow Function
// Imports functions 
var Sum =(a,b)=>{
  
    let sum=a+b;
    return sum;
}

let sum =Sum(10,20);
console.log("Sum of both Number is ",sum)
// Sum(70,30);
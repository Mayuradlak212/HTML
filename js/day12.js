console.log("Hoisting in Js ");

/*/
Hoisting is JavaScript Default Behavior of Moving declaration to the top 


/*/

x=5;
console.log("Value of x is " , x);



var x;

// console.log(" Date Function in JS ");

// console.log("Today's Date is ", new Date());
// console.log("Today's Date in Format  ", new Date().toLocaleString());
// console.log("Today's Date is ISO Time  ", new Date().toISOString())
// console.log("Current Year   ", new Date().getFullYear())
// console.log("Current Month ", new Date().getUTCMonth()+1)
// console.log("Current Day ", new Date().getUTCDate())
// console.log("Today's Date is ISO Time  ", new Date().toISOString())


console.log("OTP Generation ");

function generateOTP() {
    var otp =Math.floor(Math.random()*100000);
    console.log("OTP ",otp)
    return otp;
}

generateOTP()



var statusA=true;


// if(statusA){
//     console.log("Status is Active")
// }
// else{
//     console.log("Status is InActive ")
// }

console.log( statusA?"Active":"InActive " );
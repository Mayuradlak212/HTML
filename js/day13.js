console.log("Predefined Function of JS ")
// Es6 
//Callback 

// setTimeout
// setInterval
// clearInterval
// Spread Opretor ,Destructuring


console.log("Welcome to Callback ");
// A Callback is a function  passed  aa s an argument    to another function

//  A Callback function can run after another function has finished

// function firstFun(){
//     console.log("First Function Called");
//     // callback()
// }

// function secondFun(callback){
//     console.log("Second Function Called");
//     callback()
// }

// secondFun(firstFun);



const printMyName=()=>{
    console.log("My Name is Mayur ");
    console.log(" I am Lead Software Engineer")
}


setTimeout(printMyName,5000)


// Time will pass in Miliseconds 
// 1 second =1000ms


// console.log("Async Await ");

// const myFunc = async () => {
//     setTimeout( function () {
//         console.log("I am timeout ")
//     }, 2000)
//     return "I am Asynchronous Function";
// }

// const data= myFunc();
// console.log("Data received ",data)
// myFunc().then((data)=>{
//     console.log("Hii Process Completed : ",data)
// }).catch((err)=>{
//     console.log("Error : ",err) 
// }).finally(()=>{
//     console.log("Completed")
// });

// const myFunction=async()=>{
//     console.log("My Function");
//    return await new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             resolve("Async Function")
//         },2000)
//     })


// }


// myFunction().then((value)=>{
//     console.log(value)
// })

// async : async make a funtion return a Promise 
// await : await make a funtion wait for a Promise
// const getData =async()=>{
//    const data = await fetch();

// }

console.log("Exception Handling");
//   try, catch , throw, finally
try {
   let a=10;
   
   console.log(a%b) 
//    throw ("Error while  Evaluating Function")
}
catch (err) {
    // console.log(" I am in Catch Block Exception ", err);
    console.error ("Error while  Evaluating Function");
    console.info("Hii Info");
    console.warn("Hii Warning");
    console.table({name:"Mayur"})
}
finally {
    console.log("I am Finally Block I will Always  Execute ")
}
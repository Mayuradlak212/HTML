// How Node js is Works 
//  Call Stack 
// Node API 
// Callback Queue 

// console.log(" Process -A ") //Syncronous 

// setTimeout(function(){
//     console.log("Process -B ") //Asyncronous 
// },1000)

// console.log("Process -C ");//Syncronous

// setTimeout(()=>{
//     console.log("Process -D ")
// },2000)

// Process -A 
// day16.js:12 Process -C 
// day16.js:9 Process -B 
// day16.js:15 Process -D 

console.log("Promise in JS ")

const myFunc = (resolve, reject) => {
    // setTimeout(() => {
    //     resolve("Promise is resolved");
    //     reject("Promise is rejected");
    // }, 1000)
}

// function success(msg) {
//     console.log(msg);
// }
// function error(msg) {
//     console.log(msg)
// }

// myFunc(success,error).then(()=>{
//     console.log(success)
// }).catch(()=>{
//     console.log(err)
// })   


const myPromise = new Promise(function (resolve, reject) {
    let age = 15;
    if (age >= 18) {
        resolve("Eligible for Voting")
    }
    else {
        reject(" Not Eligible for Voting")
    }  
})

myPromise.then((data) => {
    console.log("Voting Criteria Success  ", data)
}).catch((err) => {
    console.log("Voting Criteria Failed  ", err)
}).finally((e) => {
    console.log("  Wish you best of Luck for Vote ")
})   
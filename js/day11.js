console.log("Map Filter And Reduce and Find some of Array ");

const arr = [1, 2, 3, 5, 7, 8, 9];

// 1. map --> Update The Array , Itration of Array 
// 2. filter --> it is use to get filtered elements from array 

// I want to update elements in the array with multiply by 2 

console.log("Before Map", arr)
// const updatedArrr=arr.map((element)=>{
//     return element*2;
// })

// console.log("Updated Array With Map ",updatedArrr)
// arr.map((element,index)=>{
//     console.log("Current Element",element,"Index-> ",index)
// })
// console.log("Iteration of array using Map")


// Filter the array to get only even numbers

// const filteredArr=arr.filter((element)=>{
//     return element%2==0;
// })
// console.log("Iteration of array using Filter")
// arr.filter((element,index)=>{
//     console.log("Current Element",element,"Index",index)
// })

// console.log("Filtered Elements ", filteredArr)


// console.log("Reduce in Array ");


// const sum = arr.reduce((total, element, index) => {
//     console.log("Sum ", total)
//     return total + element;
// }, 0)



  console.log("Find Method ")
const foundElement =arr.find((element)=>{
    return element%2==0;
})


console.log("Find Method ", foundElement)
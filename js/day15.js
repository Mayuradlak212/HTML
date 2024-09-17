// console.log("Spread Operator ");
// // Array and Objecct 

// let  person ={
//     name:"Mayur",
//     email:"abs@gmail.com"
// }

// let college ={collegeName:"OIST",address:"A.B Road Indore "};


// const combinedInfo ={...person,...college}


// let  arr=[1,2,4,5,6];
// arr=[...arr,10,20]

// let arr2 =[8,9,11];

// let mergedArr=[...arr,...arr2];
// console.log("Updated Array ",arr);
// console.log("Merged  Array ",mergedArr);
// console.log("Combined Info  ",combinedInfo)


console.log("Destructuring ");

const person ={
    name :"Mayur",
    email:"abc@gmail.com",
    phone:8548933
}

const  city ={
    name:"Indore",
    population:2500000,
    area:1300,
    gdp:89000,
    country:"India",
    state:"M.P"
}
// const {name,email}=person;

// console.log("Name: ",name)
// console.log("Email: ",email)


const {name,area}=city;
console.log("City Name : ",name);
console.log("Area Sq : ",area);
// 1. Object 
// 2. String 
// 3. Array 



let Name="Mayur";
// M-> 0
// a->1
// y->2... .
//  Length of The given String 
console.log("Length in String : ",Name.length)

// Uppercase Method and Lowercase Method , Capitalized Method

//  MAYUR
console.log("Uppercase Method : ",Name.toLocaleUpperCase());

// mayur
console.log("Lowercase Method : ",Name.toLocaleLowerCase());

// let address ="Vijay nagar indore near it bussiness park";
// Vijay Nagar Indore ...

// console.log("Capitalized Method ",address)

//M
console.log("Chart At Method--> ",Name.charAt(0));
// console.log("Chart At Method--> ",Name.charAt(6));

let trimName="    Mayur Adlak     "
// trim 
console.log("Trim Method : ",trimName.trim())

//concat 
let a="Mayur ";
let b="Adlak";
console.log("Concat Method : --> ",a.concat(b));

//Sub String ,slice method
const sub="Full Stack Development , We are Going to Learn Full Stack Development";
const space="          "
console.log("Sub String Method : --> ",sub.substring(0,4));   
console.log("Slice  Method : --> ",sub.slice(0,4));
console.log("Length of Space ",space.length);


// Split Method 
// ["Full","Stack","Development"]
console.log("Split Method : --> ",sub.split(" "));


//   Replace Method   --> Replace , ReplaceAll 
// console.log("Replacement Method : --> ",sub.replace("Full","MERN"));
console.log("Replacement Method : --> ",sub.replaceAll("Full","MERN"));
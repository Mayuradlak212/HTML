console.log("Array in JavaScript")

const arr=[1,2,33,5,"Mayur",true,{name:"Mayur"}];
console.log("Array in JavaScript ", arr)


const newArr=[];
newArr[0]=1;
newArr[1]=2;
newArr[6]=6;

console.log("New Array in JavaScript ", newArr)

//using Class Array Declarations     
const arrData=new Array(1,3,4,5,6);
console.log("Array data in JavaScript ", arrData)


//Indexing
const indexArr=[1,2,4,5,6,7,1] 
console.log("Index data Index->0 ", indexArr[0]);

//Length Function 
console.log("Length Function--> ",indexArr.length);


// join function
console.log("Array to String--> ",indexArr.join(","));

//Push pop Function
indexArr.push(20)
console.log("Array Push Method ",indexArr)

//Pop Method 
indexArr.pop();
console.log("Array Pop Method ",indexArr)

//Reverse  Method 
// console.log("Reverse  Method : ",indexArr.reverse())

// At method in JS
console.log("At Method : ",indexArr.at(0))


// shift for Remove First Element of Array
indexArr.shift()
console.log("Shift for Remove First Element of Array",indexArr)


// Unshift for Remove Last  Element of Array

indexArr.unshift(10)
console.log("Unshift for Remove Last  Element of Array",indexArr)

/*
Formula for Array 
Top  Deleteion --> shift()
Last Delete --> pop()
Top  Insertion --> unshift(10)
Last Insertion --> push(10)
*/

// Delete Keyword
// delete indexArr[0];
// console.log("Delete Keyword ",indexArr)


// Slice Method in Array 

    // Slice Method from start to end ,1,2
console.log("Slice Method from start to end : ",indexArr.slice(1,3))

    // Slice Method from start to end
console.log("Slice Method from start to end : ",indexArr.slice(1))


const arr1=[1,2,3,4];
const arr2=[5,6,7];
const arr3=[8,9]
const mergedArr=arr1.concat(arr2,arr3);

console.log("MergedArrays   ",mergedArr)

//to String 
console.log("To String Method ",indexArr.toString());
console.log("String")
//Sorting of Array 
// const s=indexArr.sort()
// console.log("Sorted Array Method ",s)

// console.log("To String Method ",indexArr.toSorted());


// Important Function
// map filter reduce some find 
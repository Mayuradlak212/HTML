// Object 
console.log("Let's Start Object Data Type ")


let person ={
   name:"John",
   age:30,
   city:"New York"
};
// --> Object is Key of MERN Stack Dev 
console.log("Person : ",person);
console.log("Person  Name : ",person.name);
console.log("Person Age : ",person.age);


const car ={
    model:"Honda City",
    price:1200000,
    model:"Ford",
    status:true,
    owner:{
        name:"John Doe",
        age:45,
        address:{
            city:"Pune"
        }
    }
};
// car.model="Suzuki";
// car.price="900000";
console.log("Car ",car)
console.log("Car  Property Price : ",car.owner.address.city)


const college={
    city:"Indore",
    pincode:452015,
    state:"M.P",
    collegeId:"423423"
}
college.name="OIST Indore";
college.city="Bhopal";
// [city,person,state,collegeId];
// ["Indore","452015","M.P","435435"]

const keys=Object.keys(college);
const values=Object.values(college);
console.log("Keys of College: " , keys)
console.log("Values of College: " , values)


delete college.pincode;
console.log("value after Delete ",college)






let newPerson ={
    first_name:"John",
    last_name:"Doe",
    age:30,
    city:"New York",
    name:function(){
     return this.first_name+ " "+this.last_name;
     }
 };

 console.log("Full Name: " , newPerson.name())
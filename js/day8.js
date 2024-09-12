console.log("Session Storage In JavaScript");



// Storage Data 
// Get Data
// Delete Data 

console.log("Session Storage  Data --> Store")

// it wil staore data in key value pair 
// , setItem(key, value) will 

// sessionStorage.setItem("name","Mayur Adlak")//Use to Store Data 
// sessionStorage.setItem("college","OIST Indore M.P ");
// sessionStorage.setItem("username","mayur_adlak");

// How you can get The Data from the session
// getItem(key) it will return the value of the key
let userName =sessionStorage.getItem("name");

console.log("Session Storage Data --> Get ",userName);

// Deleting Data using key 
// removeItem(key) it will delete  the value of the key
// sessionStorage.removeItem("college");

// Clear session storage data
// clear();
// sessionStorage.clear();





console.log("Local Storage ")

// Create local storage
localStorage.setItem("name","Mayur Adlak");
localStorage.setItem("college","OIST Indore ");

// Get local storage data

// localStorage.removeItem
console.log("Local Storage Data --> Get ");


localStorage.removeItem("name");  // Remove the name key data from localStorage
// localStorage.clear()
// Delete local storage data

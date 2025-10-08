console.log("Welcome to PA02: JavaScript (Part 2)!");
console.log("Repo URL: https://github.com/BreTaffe/pa02");

const name = "Breanna";                
const age = 23;                  
const isStudent = true;          
const hobbies = ["Gamiing", "Movies", "Reading"]; 
const profile = { major: "Computer Science", year: 4 }; 
let address = null;         

const nextYear = age + 1;        // arithmetic
const isAdult = age === 23;    // strict comparison
const canAccess = isStudent && age >= 18; // logical

console.log(nextYear, isAdult, canAccess);

console.log("Welcome to PA02: JavaScript (Part 2)!");
console.log("Repo URL: https://github.com/BreTaffe/PA01-HTML-Skeleton.git");

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

const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;

  if (email.includes("@") && email.includes(".")) {
    status.textContent = "✅ Valid email!";
    status.style.color = "green";
  } else {
    status.textContent = "❌ Invalid email format.";
    status.style.color = "red";
  }
});

const hobbyList = document.getElementById("hobbyList");
for (let i = 0; i < hobbies.length; i++) {
  const li = document.createElement("li");
  li.textContent = hobbies[i];
  hobbyList.appendChild(li);
}

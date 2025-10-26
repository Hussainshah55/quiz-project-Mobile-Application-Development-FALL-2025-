// Step 1: Define users
const users = [
  { name: "Sara", age: 17 },
  { name: "Ahmed", age: 20 },
  { name: "Bilal", age: 25 }
];

// Step 2: Function to filter adults
function filterAdults(users) {
  return users.filter(user => user.age > 18);
}

// Step 3: Get filtered users
const adults = filterAdults(users);

// Step 4: Display results on the webpage
const list = document.getElementById("userList");

adults.forEach(user => {
  const li = document.createElement("li");
  li.textContent = `${user.name} (Age: ${user.age})`;
  list.appendChild(li);
});

console.log("Adult Users:", adults);

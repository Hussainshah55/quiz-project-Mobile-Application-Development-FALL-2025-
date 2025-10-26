// Two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine using spread operator
const result = [...arr1, ...arr2];

// Display result on the webpage
document.getElementById("output").innerText = "Combined Array: " + result;

// Also log in the console (optional)
console.log("Combined Array:", result);

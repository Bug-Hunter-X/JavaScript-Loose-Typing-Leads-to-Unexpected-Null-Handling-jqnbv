function myFunc(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Simple addition
}

console.log(myFunc(null, 5)); // Output: 0
console.log(myFunc(5, null)); // Output: 0
console.log(myFunc(5, 10));  // Output: 15

//This looks fine, but consider this edge case:
console.log(myFunc(null, '5')); //Output: 0 //This will return 0. But expected outcome should have raised a type error
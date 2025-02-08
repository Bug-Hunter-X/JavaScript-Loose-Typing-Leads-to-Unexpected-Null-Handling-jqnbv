function myFunc(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input type. Both arguments must be numbers.');
  }
  return a + b; // Simple addition
}

console.log(myFunc(null, 5)); // Output: 0
console.log(myFunc(5, null)); // Output: 0
console.log(myFunc(5, 10));  // Output: 15

//This looks fine, but consider this edge case:
console.log(myFunc(null, '5')); // Throws an error: 'Invalid input type. Both arguments must be numbers.'
console.log(myFunc(5, '10')); // Throws an error: 'Invalid input type. Both arguments must be numbers.'
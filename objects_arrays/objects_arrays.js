// Object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'gardening', 'hiking'],
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    },
    greet: function() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
  };
  
  // Array literal
  const numbers = [1, 2, 3, 4, 5];
  
  // Object methods and properties
  console.log(person.firstName); // Output: John
  console.log(person.hobbies[0]); // Output: reading
  person.greet(); // Output: Hello, my name is John Doe.
  
  // Array methods
  numbers.push(6); // Add an element to the end
  console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
  
  numbers.pop(); // Remove the last element
  console.log(numbers); // Output: [1, 2, 3, 4, 5]
  
  numbers.unshift(0); // Add an element to the beginning
  console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]
  
  numbers.shift(); // Remove the first element
  console.log(numbers); // Output: [1, 2, 3, 4, 5]
  
  numbers.forEach(num => console.log(num * 2)); // Output: 2, 4, 6, 8, 10
  
  const doubledNumbers = numbers.map(num => num * 2);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  
  const filteredNumbers = numbers.filter(num => num % 2 === 0);
  console.log(filteredNumbers); // Output: [2, 4]
  
  numbers.splice(1, 2); // Remove elements at index 1 and 2
  console.log(numbers); // Output: [1, 4, 5]
  
  const slicedNumbers = numbers.slice(1, 3); // Extract elements from index 1 to 3 (exclusive)
  console.log(slicedNumbers); // Output: [4, 5]
  
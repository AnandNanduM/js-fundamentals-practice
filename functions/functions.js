// Arrow function
const greet = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
  // Default parameters
  const greetDefault = (name = 'World') => {
    console.log(`Hello, ${name}!`);
  };
  
  // Scope and closures
  let outerVar = 'I am global';
  
  const outerFunction = () => {
    let innerVar = 'I am local';
  
    const innerFunction = () => {
      console.log(outerVar); // Access global variable
      console.log(innerVar); // Access variable from outer function
    };
  
    return innerFunction;
  };
  
  // Argument objects
  const displayArgs = (...args) => {
    console.log('Arguments:', args);
  };
  
  // Test the functions
  greet('Alice'); // Output: Hello, Alice!
  greetDefault(); // Output: Hello, World!
  greetDefault('Bob'); // Output: Hello, Bob!
  
  const innerFunc = outerFunction();
  innerFunc(); // Output: I am global, I am local
  
  displayArgs(1, 'two', true); // Output: Arguments: [1, 'two', true]
  
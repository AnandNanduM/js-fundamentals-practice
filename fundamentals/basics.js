// Declaring variables
var myVar = 'Hello'; // old way, function-scoped
let myLet = 'World'; // block-scoped, can be reassigned
const myConst = '!';
console.log(myVar, myLet, myConst);

// Data types
var num = 10; // Number
var str = 'Hello'; // String
var bool = true; // Boolean
var nul = null; // Null
var und = undefined; // Undefined
var sym = Symbol('foo'); // Symbol
console.log(num, str, bool, nul, und, sym);

// Operations
// Arithmetic
var addition = 5 + 3; // 8
var subtraction = 10 - 5; // 5
var multiplication = 4 * 2; // 8
var division = 20 / 4; // 5
var modulus = 10 % 3; // 1
console.log(addition, subtraction, multiplication, division, modulus);

// Comparison
var equal = 5 === '5'; // false
var notEqual = 5 !== '5'; // true
var greaterThan = 10 > 5; // true
var lessThan = 5 < 10; // true
var greaterThanOrEqual = 10 >= 10; // true
var lessThanOrEqual = 5 <= 10; // true
console.log(equal, notEqual, greaterThan, lessThan, greaterThanOrEqual, lessThanOrEqual);

// Logical
var and = true && false; // false
var or = true || false; // true
var not = !true; // false
console.log(and, or, not);

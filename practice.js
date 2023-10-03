var x3 = 5;

let y = "hello";

const z = true;

//data type examples in JS

let a = 42;
let b = "Hello world!";
let c = true;
let d;
let e = null;
let f = { name: "John", age: 30 };
let g = Symbol("foo");


// Arithmetic operators
let a1 = 5 + 2; // addition
let b1 = 5 - 2; // subtraction
let c1 = 5 * 2; // multiplication
let d1 = 5 / 2; // division
let e1 = 5 % 2; // modulus

// Comparison operators
let f1 = 5 > 2; // greater than
let g1 = 5 < 2; // less than
let h1 = 5 >= 2; // greater than or equal to
let i1 = 5 <= 2; // less than or equal to
let j1 = 5 == 2; // equal to
let k1 = 5 != 2; // not equal to

// Logical operators
let l = true && true; // logical and
let m = true || false; // logical or
let n = !true; // logical not


//If
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

//Else
let x1 = 3;
if (x1 > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}

//For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Global scope
const globalVar = 'I am a global variable';

function globalFunction() {
    // Function scope
    const functionVar = 'I am a function variable';
    console.log(globalVar);
    console.log(functionVar);
}

globalFunction();

// Output:
// I am a global variable
// I am a function variable

function outerFunction() {
    // Outer function scope
    const outerVar = 'I am an outer variable';

    function innerFunction() {
        // Inner function scope
        const innerVar = 'I am an inner variable';
        console.log(outerVar);
        console.log(innerVar);
    }

    innerFunction();

    // Output:
    // I am an outer variable
    // I am an inner variable
}

outerFunction();

//Types of functions in JS
//named functions
function add(a, b) {
    return a + b;
}

console.log(add(3, 8));

//Function Expression
const add2 = function (a, b) {
    return a + b;
}

console.log(add2(3, 8));

//Anonymous function
const add3 = function (a, b) {
    return a + b;
}
console.log(add3(3, 8));

//Arrow function
const add4 = (a, b) => {
    return a + b;
}
console.log(add4(3, 8));


//Default param
function greet(name = 'friend') {
    return `Hello, ${name}!`;
}
console.log(greet("Veesar"));

//Rest param function
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num);
}
console.log(sum(3, 5, 7, 9));


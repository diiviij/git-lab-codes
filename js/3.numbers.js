const num1 = 10;
const num2 = 2;

// addition +
num1 + num2; // 12
const addition = num1 + num2;

// subtraction -
const difference = num1 - num2;
// 8

// division /
const division = num1 / num2;
// 5 
7 / 2; // 3.5

// multiplication *
const product = num1 * num2;
// 20

// remainder (mod) %
const remainder = num1 % num2;
// 0

// power **
const power = num1 ** num2;
// 100

// round
Math.round(4.9); // 5
Math.round(4.1); // 4
Math.round(4.5); // 5

// floor
Math.floor(4.9); // 4
Math.floor(4.1); // 4
Math.floor(4.5); // 4

// ceil
Math.ceil(4.9); // 5
Math.ceil(4.1); // 5
Math.ceil(4.5); // 5

// random -> random number between 0 & 1 excluding 0 and 1
Math.random(); 


const randomNumber = 10 + Math.round(Math.random() * 5);
// 0.9 * 5 = 5 + 10 = 14.5
// 0.7 * 5 = 4 + 10 = 13.5
// 0.5 * 5 = 3
// 0.12 * 5 = 1
// 0.1 * 5 = 1
// 0.07 * 5 = 0

parseInt("mnbv"); // NaN -> Not a Number
NaN; // typeof NaN -> number
parseInt("9384asdlsakdj"); // 9384

parseFloat("10.7"); 

// operators
// increment ++
let number = 1;
number++;
++number;

// decrement --
number--;
--number;

// shortcuts
number = number + 5;
number += 5;

number.toFixed(2); 
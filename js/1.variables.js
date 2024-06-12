// x is variable name
// = assignment operator
// 5 is the value/literal
// NEVER DO THIS.
x = 5;

// var -> NEVER USE VAR
// declaration
var number; // undefined
number = 10; // assignment
number = 15; // reassignment

var age = 20; // declaration + assignment

// let -> USE LET OVER VAR.
let primeNumber; // undefined
primeNumber = 7;
primeNumber = 11;

let negativeNumber = -11;

// const -> PREFER CONST OVER LET.
// ALWAYS have to do declaration + assignment
const DISTANCE_TO_SUN = 30000000000;

const PI;
PI = 3.14;// DOES NOT WORK

// variable/non universal consts -> camelCased
// UNIVERSAL Constants -> capitalized
// 
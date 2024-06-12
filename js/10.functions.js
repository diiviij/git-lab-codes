// non parameterized, non returning
function greet(/**parameter list */) {
    // execution block
    console.log('heloooo');
}

greet; // REFERENCE TO THE FN EXPRESSION
greet(); // executes/calls the function

function greetPerson(name) {
    console.log(`HELLOO ${name}`);
}

greetPerson("Akshay"); 

function getGreeting() {
    return 'Hello'; 
    // STOP THE EXECUTION OF THE FN;

    return 'Hello too';
}

const message = getGreeting(); // 'Hello'

function getFullGreeting(name) {
    return `Helloo, ${name}`
}

const greeting = getFullGreeting("Shreyas");

const add = function(n1, n2) {
    return n1 + n2;
}

add; // reference
add(1, 2); // 3
add(); // NaN
add(1); // NaN
add("1"); // 1undefined
add(1,2,3,4,5,6)// 3

// arrow
const subtract = (n1, n2) => {
    return n1 - n2;
}


// 1. one parameter => omit ()
// 2. one statement => omit {}
//      no return statement
const multiplyBy5 = n => n * 5;

function checkAge(list, age) {
    return list.includes(age);
}

const hasAge = function(list, age) {
    return list.includes(age);
}

const includesAge = (list, age) => list.includes(age);


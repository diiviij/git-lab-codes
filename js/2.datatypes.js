// number

const integer = 10;
const decimal = 10.5;
const negative = -10;

// console.log is NOT javascript
console.log(typeof integer); // number

// string
// character(s) [a-z, A-Z, 0-9, special chars] enclosed
// in '', "", `` 
const singleQuotedString = 'this is a string';
const doubleQuotedString = "this is also a string";
const backTickedString = `this is a string tooo!!`;

console.log(typeof backTickedString); // string

// boolean
const hadLunch = false;
const isBored = true;

// undefined
const brain = undefined; // NEVER DO THIS.

console.log(typeof brain); // 'undefined'

// null -> PSEUDO DATA TYPES.
const girlfriend = null; // NEVER DO THIS.

console.log(typeof girlfriend); // object


// collection datatypes

// array
// elements of ANY datatype, separated by commas,
// enclosed in []
const numbers = [1, 2, 3, 4, 5];
const names = ["Gauri", "Navodita", "Salony"];
const practiceDays = [true, false, false];

let person = [
    30,
    "Aniruddha",
    true,
    null,
    undefined,
    ["A", "B", "C"],
    {
        city: "Pune",
        country: "IN"
    },
    function greet() {
        console.log('this is a fn')
    }
];

console.log(typeof person); // object

// objects
// key: value pairs, separated commas
// value can be of ANY datatype
// key can be only string
// enclosed in {}

person = {
    age: 30,
    name: "Aniruddha",
    isHungry: true,
    brain: undefined,
    gf: null,
    friends: ["A", "B", "C"],
    address: {
        city: "Pune",
        country: "IN"
    },
    greet: function greet() {
        console.log('this is a fn')
    }
};

console.log(typeof person); // object

// functions
function greet() {
    console.log('this is a fn')
}

console.log(typeof greet); // function
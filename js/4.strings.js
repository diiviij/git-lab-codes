const greeting = "HELLOOOOO";
const name = "Jay";

// concatenation/merging/joining
// OLD WAY +
let fullGreeting = greeting + " " + name;
// HELLOOOOO Jay

// ES6+ WAY -> PREFERRED WAY
fullGreeting = `${greeting} ${name}`;

// property
// index      012345
let word = "bottle";
word.length; // 6

// access char
word[0]; // b
word[5]; // e
word[7]; // undefined
word[-1]; // undefined

word[0] = "h"; // WILL NOT BE hottle -> IMMUTABILITY

let surname = "hgjh";
surname = "pwqoei"; // reassigning

// methods
// toLowerCase & toUpperCase

const sentence = "this is a sentence";
sentence.toLowerCase();
sentence.toUpperCase();

// includes
sentence.includes("is"); // true

// split
const csv = "A|1235789|kothrud"
csv.split("|"); // ["A", "12456789", "kothrud"]

const input = "       user is mad     ";
input.trim(); // user is mad

const anotherInput = "user     is    mad";
anotherInput.replace("     ", " "); // user is    mad

sentence.indexOf("i"); // 2
sentence.indexOf("z"); // -1
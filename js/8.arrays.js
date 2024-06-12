// index         0   1   2   3   4
const numbers = [10, 20, 30, 40, 50];

numbers.length; // 5

// access elements
numbers[0]; // 10
numbers[2]; // 30
numbers[4]; // 50
numbers[6]; // undefined

// modify elements
numbers[0] = 11; // [11, 20, 30, 40, 50];
numbers[1] = 21; // [11, 21, 30, 40, 50];
// numbers[100] = 100; // NEVER EVER DO THIS.

// add elements
// push -> new length
numbers.push(60); // -> 6
// [11, 21, 30, 40, 50, 60];

// unshift
numbers.unshift(0); // -> 7
// [0, 11, 21, 30, 40, 50, 60];

// splice
// 3 -> starting index
// 0 -> how many elements to delete
// 35 -> element(s) to add
// 3rd and onwards elements to add to the array
numbers.splice(3, 0, 35); // -> []
// [0, 11, 21, 30, 35, 40, 50, 60];


// remove elements
// pop -> deleted element
numbers.pop(); // 60
// [0, 11, 21, 30, 35, 40, 50];

// shift -> deleted element
numbers.shift(); // 0
// [11, 21, 30, 35, 40, 50];

// splice
numbers.splice(3, 1); // [35]
// [11, 21, 30, 40, 50];

// map, filter, reduce, foreach, find
const nums = [1, 2, 3, 4, 5];
const squares = nums.map(n => n ** 2);
nums.map(n => n % 2 ? n ** 3 : n ** 2);
nums.filter(n => n >= 3); 

const sum = nums.reduce((sum, currentElem) => {
    // 10, 5
    return sum + currentElem;
    // 15
});


nums.forEach(elem => {
    // code..
});

const computers = [
    { name: "a", price: 7000 },
    { name: "b", price: 8000 },
    { name: "a", price: 9000 },
    { name: "d", price: 5000 },
    { name: "e", price: 4000 },
];

computers.find(computer => computer.name === "a" && computer.price === 9000);

// methods

numbers.includes(5); // f
numbers.indexOf(40); // 3 | -1

// cloning
const shreyasFriends = [{
    name: "dhananjay",
    contact: 12567890,
}, {
    name: "salony",
    contact: 12567890,
}];
// COPIES REFERENCE into navoditasFriends
const navoditasFriends = shreyasFriends;

navoditasFriends.push({
    name: "gauri",
    contact: 678902345,
});

// SHALLOW CLONE
const siddhisFriends = navoditasFriends.slice();
siddhisFriends.push({
    name: "akshaya",
    contact: 987654321,
});

siddhisFriends[0].contact = 876954323
// all ways of doing in deep clone using pure JS

// destructuring
const person = ["jay", "pokar", 20];

// const name = person[0];
// const surname = person[1];
// const age = person[2];

const [name, surname, age] = person;
const [,,vay] = person;

// rest ... -> combining
const [naam, ...restOfThePerson] = person;
// const [...person, ag] = person;  ... should always be at the END
// ["pokar", 20]

// spread ... -> spreading, copying
// SHALLOW CLONE
const personClone = [...person];


const assignments = ["a1", "a2", "a3"];
const resources = ["r1", "r2", "r3"];
// ["a1", "a2", "a3", "r1", "r2", "r3"]
const assignmentsAndResources = [...assignments, ...resources];


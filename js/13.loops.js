// for, while
const sentence = "this is a sentence";
const people = ["A", "B", "C"];
const person = { age: 20, name: "A" };

// traditional
for (let index = 0; index < sentence.length; index++) {
    const char = sentence[index];
    console.log(char);
}

for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
}

const keys = Object.keys(person);
for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const value = person[key];
    console.log(key, value);
}

// for in
for (let index in sentence) {
    const char = sentence[index];
    console.log(char);
}

for (let index in people) {
    const element = people[index];
    console.log(element, index);
}

for (let key in person) {
    const value = person[key];
    console.log(key, value);
}

// for of
for (let char of sentence) {
    console.log(char);
}

for (let element of people) {
    console.log(element);
}

for (let key of keys) {
    const value = person[key];
    console.log(key, value);
}

const friends = [
    { age: 20, name: "A" },
    { age: 21, name: "B" },
    { age: 22, name: "C" },
    { age: 23, name: "D" },
];

// A is 20 years old

for (let index = 0; index < friends.length; index++) {
    const { age, name } = friends[index];
    console.log(`${name} is ${age} years old`)
}

for (let index in friends) {
    const { age, name } = friends[index];
    console.log(`${name} is ${age} years old`)
}

for (let { age, name } of friends) {
    console.log(`${name} is ${age} years old`)
}
// function passed as a parameter

const greetAdmin = () => 'hey admin';
const greetEmployee = () => 'hello employee';


const greet = (callback) => {
    // greetAdmin => callback => () => 'hey admin'
    // greetEmployee => callback => () => 'hello employee'
    const greeting = callback();
    console.log(greeting);
}

greet(greetAdmin);
greet(greetEmployee);


const map = (array, callback) => {
    // array = ["a", "b", "c"]
    // callback = n => n.toUpperCase()
    const modifiedArray = [];
    // ["A", "B", "C"]
    for(let i = 0; i < array.length; i++) {
        // i = 2
        const element = array[i];
        // "c"
        const modifiedElement = callback(element);
        // "C"
        modifiedArray.push(modifiedElement);
    }   

    return modifiedArray;
}

map(["a", "b", "c"], n => n.toUpperCase());
map(["a", "b", "c"], n => {
    const char = n.toLowerCase();
    const upperCaseChar = char.toUpperCase();
    return `${char}${upperCaseChar}${char}`
});

const filter = (array, callback) => {
    const modifiedArray = [];
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        const testPassed = callback(element);
        if(testPassed){
            modifiedArray.push(modifiedElement);
        }
    }   

    return modifiedArray;
}

filter([1, 2, 3], n => n % 2 === 0);

const reduce = (array, callback, initialValue) => {
    initialValue = initialValue !== undefined ? initialValue : array[0];
    const startingIndex = initialValue !== undefined ? 0 : 1;

    for(let index = startingIndex; index < array.length; index++) {
        initialValue = callback(initialValue, array[index]);
    }

    return initialValue;
}


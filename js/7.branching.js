
// {}
if(condition) {
    // excecuted only if condition is true
}

const isPrime = true;
const isDivisibleBy11 = true;

if(isPrime) {
    console.log("this number is prime");
} else if(isDivisibleBy11) {
    console.log("this number is divisible by 11");
} else {
    console.log("this number is not prime");
}


const thirdFloorThreshold = 25;
const secondFloorThreshold = 18;
const age = 27;
let message = "";
if(age >= thirdFloorThreshold) {
    message = "hard liquor";
} else if (age >= secondFloorThreshold) {
    message = "soft liquor";
} else {
    message = "drink milk";
}

// ternary operators
message = age >= thirdFloorThreshold ? "hard liquor" : 
          age >= secondFloorThreshold ? "soft liquor" : 
          "drink milk";


// switch
const chosenPokemon = "pikachu";

switch(chosenPokemon) {
    case "pikachu":
        console.log("I choose you Pikachu");
        break;
    case "charizard":
        console.log("Goooooo charizard");
        break;
    case "ditto":
        console.log("change and attack ditto");
        break;
    default:
        console.log("You dont own this pokemon");
}

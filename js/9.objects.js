const currentLocation = "NY";
const dynamicKey = "currentTournament";
const dynamicValue = "Tata Steel"

let chessPlayer = {
    0: "value at 0",
    name: "Magnus",
    surname: "Carlsen",
    age: 32,
    basketballKnowledge: undefined,
    championship: null,
    lastFiveResults: ["W", "W", "L", "W", "W"],
    address: {
        city: "Pune",
        country: "Norway"
    },
    isChampion: false,
    play: function() {
        console.log(`${this.name} plays e4`);
    },
    resign: () => console.log(`${this.name} resigns`),
    // key         : value
    currentLocation: currentLocation, 
    currentLocation,
    [dynamicKey]: dynamicValue
 // currentTournament: "Tata Steel"
}

chessPlayer.hobby; // undefined

// access
chessPlayer.age; // 32
chessPlayer["age"]; // 32
const key = "age";
chessPlayer[key]; // 32
chessPlayer.key; // undefined

// modify
chessPlayer.age = 33; 
chessPlayer["age"] = 34; 
const somekey = "age";
chessPlayer[somekey] = 35; 
chessPlayer.key = 40; // creates a new 'key' with value 40


// add a key:value pair
chessPlayer.middleName = "abcd"; 
chessPlayer["middleName"] = "abcd"; 
const anotherKey = "middleName";
chessPlayer[anotherKey] = "abcd";

// delete
delete chessPlayer[0]; 

// destructuring
const address = "lkjfdlkasjd";
const { address: addr } = chessPlayer;

// method
chessPlayer.hasOwnProperty("hobby"); // F
chessPlayer.hasOwnProperty("isChampion"); // T

// static methods
Object.keys(chessPlayer); // list of keys
// keys are strings

Object.values(chessPlayer); 
// list of all values

Object.entries(chessPlayer);
// [ [k, v], [k, v], [k, v] ]
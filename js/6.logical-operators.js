// AND &&
// OR ||
// NOT !

// AND &&
// AND always tends to F
// is true only when both booleans are TRUE
true  && true  // T
false && true  // F
true  && false // F
false && false // F


// OR ||
// OR always tends to be T
// is false only when both booleans are FALSE
true  || true  // T
false || true  // T
true  || false // T
false || false // F

// NOT ! -> negation
!true  // false
!false // true

// TRUTHY & FALSY
// FALSY -> 0, "", NaN, undefined, null, false
// ANYTHING APART FROM FALSY ARE TRUTHY

(0 && true) || false || 56 || [] && 89 || (false || true)
    0 || false || 56 || [] && 89 || (false || true)
    0 || false || 56 || [] && 89 ||  true
    0 || false || 56 ||    89    || true 
      false    || 56 ||    89    || true 
             56 ||    89    || true 
                 56 || true 
                    56

// first value is falsy -> first value
// first value is truthy -> second value
const name = "at" && "" && "56789";

// first is falsy -> second value
// first is truthy -> first value
const nameWithOr = "" || "2356789" || "asdsadsad";

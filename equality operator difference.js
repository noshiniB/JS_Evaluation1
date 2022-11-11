//Difference between == and ===

console.log("5" == 5); // Here type coercion is performed, and so the == operator converted the string "5" to number

console.log("5" === 5); /// Type coercion cannot be performed with === operator

let a = true;
let b = 1;

console.log(a == b);

console.log(a === b);

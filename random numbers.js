//Generating random number

console.log(Math.floor(Math.random() * 5) + 1); // between 1-5

function randomNumber1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)); // +1 includes the min and max numbers
}
console.log(randomNumber1(1, 5));
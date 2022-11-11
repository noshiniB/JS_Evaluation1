//Reverse a string

function ReverseString(str) {
    return str.split('').reverse().join(''); // splits into an array, reverse the array, join the array and convert it into string
}
console.log(ReverseString("Noshini"));


function ReverseString1(str) {

    return [...str].reduce((x, y) => y.concat(x));
}

console.log(ReverseString1("Noshini"))

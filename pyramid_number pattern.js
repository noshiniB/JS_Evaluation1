//pyramid Pattern with numbers decreased by 1

let num1 = 4;
let strings = "";
let min = 1;
let count1 = 1;
// External loop
for (let i = 1; i <= num1; i++) {
    // creating spaces
    for (let j = 1; j <= num1 - i; j++) {
        strings += " ";
    }
    // creating numbers
    for (let k = 1; k <= 2 * i - min; k++) {
        strings += count1;
        strings += " ";
        count1++;
    }
    strings += "\n";
    min++;
}
console.log(strings);
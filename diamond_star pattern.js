//Diamond pattern

let n5 = 5;
let string5 = "";
// Upside pyramid
for (let i = 1; i <= n5; i++) {
    // printing spaces
    for (let j = n5; j > i; j--) {
        string5 += " ";
    }
    // printing star
    for (let k = 1; k <= i * 2 - 1; k++) {
        string5 += "*";
    }
    string5 += "\n";
}
// downside pyramid
for (let i = 1; i <= n5 - 1; i++) {
    // printing spaces
    for (let j = 1; j <= i; j++) {
        string5 += " ";
    }
    // printing star
    for (let k = (n5 - i) * 2 - 1; k > 0; k--) {
        string5 += "*";
    }
    string5 += "\n";
}
console.log(string5);
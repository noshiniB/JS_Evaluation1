//Pattern with numbers decreased by 1

let num = 4; //height 
let string1 = "";
let count = 1;
// External loop
for (let i = 1; i <= num; i++) {
    // Internal loop
    for (let j = 1; j <= i; j++) {
        string1 += count;
        count++;
    }
    string1 += "\n";
}
console.log(string1);
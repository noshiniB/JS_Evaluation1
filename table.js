//console.table()

/* 

1. console.table() method writes a table to the console.
2. syntax : console.table(tabledata, tablecolumns)
3. tabledata is required and the tablecolumns is optional

*/

let car1 = { name: "Audi", model: "A4" }
let car2 = { name: "Volvo", model: "XC90" }
let car3 = { name: "Ford", model: "Fusion" }

console.table([car1, car2, car3]);

console.table([car1, car2, car3], ["model"]);


let ARRAY = [1, 2, 3, 4, 5];
console.table([ARRAY]);
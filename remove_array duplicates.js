//Removing duplicates from an array

let array1 = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5]
let array2 = [...new Set(array1)]; // set object contains only unique elements
console.log(array2);

let arr = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];
console.log(arr.filter((item, index) => arr.indexOf(item) === index));
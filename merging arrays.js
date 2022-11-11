//Merging two arrays

let arr1 = [1, 2, 9, 3, 5, 1, 4, 5];
let arr2 = [11, 54, 70, 40];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

console.log(arr1.concat(...arr2,));

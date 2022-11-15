//Difference between forEach and map

let myArray = [1, 2, 3, 4];

let returnValue = myArray.forEach((element) => {
    return element * element;
});
console.log(returnValue);

let myArray1 = [1, 2, 3, 4];

let returnValue1 = myArray1.map((element) => {
    return element * element;
})
console.log(returnValue1);




let myArray2 = [1, 4, 2, 9];

let returnValue2 = myArray2.map((element) => {
    return element * element
}).sort((a, b) => a - b);
console.log(returnValue2);

let myArray3 = [1, 2, 3, 4];

let returnValue3 = myArray3.forEach((element) => {
    return element * element;
}).sort((a, b) => a - b);
console.log(returnValue3);

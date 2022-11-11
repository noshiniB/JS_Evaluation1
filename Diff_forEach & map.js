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

//To check if a number is prime or not 

let prime = 77;
if (prime > 1)
    if (prime % 2 === 0)
        console.log("It's not a prime number");
    else
        console.log("Its a prime number");
else
    console.log(prime + " " + "is either prime or composite");


function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return true;
}
console.log(isPrime(4));

//Difference between == and ===

console.log("5" == 5); // Here type coercion is performed, and so the == operator converted the string "5" to number

console.log("5" === 5); /// Type coercion cannot be performed with === operator

let a = true;
let b = 1;

console.log(a == b);

console.log(a === b);

//Reverse a string

function ReverseString(str) {
    return str.split('').reverse().join(''); // splits into an array, reverse the array, join the array and convert it into string
}
console.log(ReverseString("Noshini"));


function ReverseString1(str) {

    return [...str].reduce((x, y) => y.concat(x));
}

console.log(ReverseString1("Noshini"))

//Reverse a word in sentence

//To check palindrome

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if (string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
checkPalindrome("mom");

function checkPalindrome1(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(checkPalindrome1("momy"));

//Difference between forEach and map

let myArray = [1, 2, 3, 4];

const returnValue = myArray.forEach((element) => {
    return element * element;
});
console.log(returnValue);

let myArray1 = [1, 2, 3, 4];

const returnValue1 = myArray1.map((element) => {
    return element * element;
})
console.log(returnValue1);

//Generating random number

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(randomNumber(1, 5));

function randomNumber1(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // +1 includes the min and max numbers
}
console.log(randomNumber1(1, 5));

//Removing duplicates from ana array

let array1 = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5]
let array2 = [...new Set(array1)]; // set object contains only unique elements
console.log(array2);

let arr = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index); // indexof returns items first occurence index
}

console.log(removeDuplicates(arr));

//Adding first 10 natural numbers

Number = 10
let sum = 0;
for (let i = 1; i <= Number; i++) {
    sum += i;
}
console.log('The sum of first ten natural numbers:', sum);

let Number1 = 10;
let sum1 = 0;
let j = 1;
while (j <= Number1) {
    sum1 += j;
    j++;
}
console.log('The sum of first ten natural numbers:', sum);

//Sum of odd and even numbers

let Sum = 0;
let Sum1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0)
        Sum += i;

    else if (i % 2 != 0)
        Sum1 += i;

}
console.log(Sum);
console.log(Sum1);

//Merging two arrays

let arr1 = [1, 2, 9, 3, 5, 1, 4, 5];
let arr2 = [11, 54, 70, 40];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

console.log(arr1.concat(...arr2,));

//Remove duplicates

let Arr = [{ id: 1, name: 'Stephen covey' },
{ id: 2, name: 'Robin Sharma' },
{ id: 3, name: 'Tolstoy' },
{ id: 3, name: 'Tolstoy' },
{ id: 5, name: 'James clear' }]

//Comparing two objects

function isEqual(obj1, obj2) {
    let props1 = Object.getOwnPropertyNames(obj1);
    let props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length != props2.length) {
        return false;
    }
    for (let i = 0; i < props1.length; i++) {
        let prop = props1[i];



        if (obj1[prop] !== obj2[prop]) {
            return false;
        }


    }

    return true;
}

let object1 = { id: 1, name: "edison" };
let object2 = { id: 1, name: "edison" };

console.log(isEqual(object1, object2));

console.log(JSON.stringify(object1) === JSON.stringify(object2))

let object3 = { id: 1, name: "edison" };
let object4 = { id: 2, name: "edison" };

console.log(isEqual(object3, object4));

console.log(JSON.stringify(object3) === JSON.stringify(object4))

//Flat the array

let mul_array = [1, 4, 2, 3, [10, 20, 20], [100, 500, 700, 600], [2000, 1000]];
console.log(mul_array.flat());

console.log(mul_array.flat());

//Grouping

let array = [{ id: 1, name: "edison" },
{ id: 2, name: "Annand" },
{ id: 3, name: "Vasanth" }]

//Right angeled triangle

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);


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
    for (let k = 0; k < i * 2 - 1; k++) {
        string5 += "*";
    }
    string5 += "\n";
}
// downside pyramid
for (let i = 1; i <= n5 - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        string5 += " ";
    }
    // printing star
    for (let k = (n5 - i) * 2 - 1; k > 0; k--) {
        string5 += "*";
    }
    string5 += "\n";
}
console.log(string5);
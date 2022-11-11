//To check if a number is prime or not 

let prime = 9;
if (prime > 1)
    if (prime % 2 === 0)
        console.log(prime + " " + "is not a prime number");
    else
        console.log(prime + " " + "is a prime number");
else
    console.log(prime + " " + "is not a prime number");


function isPrime(num) {
    if (num <= 1)
        return false;
    if (num === 2)
        return true;
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

var s = ["i", "like", "this",
    "program", "very", "much"];
var ans = "";
for (var i = 5; i >= 0; i--) {
    ans += s[i] + " ";
}
console.log(ans);

//To check palindrome

let p_string = "mom";
let reverseString = p_string.split('').reverse().join('');

if (p_string == reverseString) {
    console.log('It is a palindrome');
}
else {
    console.log('It is not a palindrome');
}

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

console.log(Math.floor(Math.random() * 5) + 1); // between 1-5

function randomNumber1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)); // +1 includes the min and max numbers
}
console.log(randomNumber1(1, 5));

//Removing duplicates from ana array

let array1 = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5]
let array2 = [...new Set(array1)]; // set object contains only unique elements
console.log(array2);

let arr = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];
console.log(arr.filter((item, index) => arr.indexOf(item) === index));


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

let array0 = [{ id: 1, name: 'Stephen covey' }, // using set object
{ id: 2, name: 'Robin Sharma' },
{ id: 3, name: 'Tolstoy' },
{ id: 3, name: 'Tolstoy' },
{ id: 5, name: 'James clear' }];
let jsonObject = array0.map(JSON.stringify); // to convert object to string
let uniqueSet = new Set(jsonObject);
let uniqueArray = Array.from(uniqueSet).map(JSON.parse); //convert string to object, map is a array method

console.log(...uniqueArray);

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

//Grouping

let array = [{ id: 1, name: "edison" },
{ id: 2, name: "Annand" },
{ id: 3, name: "Vasanth" }]


//Right angeled triangle

let n = 5; //height
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

//Explain

//console.log

/*
1. console.log() method writes message to console
2. It is used for debugging
3. A parameter is required 
4. syntax : console.log(message)

*/

let c = 5;
console.log(c);

//console.dir

/*
1. console.dir() method is used to display the propertied of an object
2. A parameter is required 
3. It shows all properties of DOM element
4. A disclosure triangle will display the child objects
5. syntax : console.dir(object)
*/

let obj2 = { id: 1, Name: "Noshini" };
console.dir(obj2);

//console.count()

/*

1. console.count() method counts the number of times it is called
2. A label can be passed as a parameter that will be included in the console view and it is optional
3. syntax : console.count(label)
*/

for (let i = 0; i < 5; i++) {
    console.count("count");
}


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


//console.time/timeLog/timeEnd

/*

1. The time() method starts a timer in the console view.
2. The time() method allows you to time code for testing purposes.
3. we can run many timers at the same time
4. label parameter can be used to name different timers and it is optional
5. syntax : console.time(label)

1.The timeEnd() method ends a timer, and writes the result to the console.
2. The time() method allows you to time code for testing purposes.
3. we can run many timers at the same time
4. label parameter can be used to name different timers and it is optional
5. syntax : console.timeEnd(label)

1. The console.timeLog() method logs the current value of a timer that was previously started by calling console.time() to the console.
2. label parameter can be used to name the timeLog and it is optional
3. syntax : timeLog(label)


*/

console.time("time");
for (let i = 0; i < 100000; i++) {
}
console.timeLog("time");
console.timeEnd("time");

//console.trace()

/*

1. The trace() method displays a trace that show how the code ended up at a certain point.
2. 4. label parameter can be used to name the traceand it is optional
3. console.trace(label)

*/

function foo() {
    function bar() {
        console.trace("tracing");
    }
    bar();
}

foo();

//console.group/groupEnd

/*

1. The group() method starts a message group.
2. All new messages will be written inside this group.
3. label parameter can be used to name the group it is optional
4. syntax : console.group(label)

1. The groupEnd() ends a message group.
2. syntax : console.groupEnd()

*/

console.log("Hello world!");
console.group("labeled");
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");

//console.assert()

/*

1. The assert() method writes a message to the console if an expression evaluates to false.
2. syntax : console.assert(expression, message)
3. Both the parameters are required

*/

let x = 5;
let y = 5;
const myArr = ["Orange", "Banana", "Mango", "Kiwi"];
console.assert(x + y == 11, myArr);

const myArr1 = ["Orange", "Banana", "Mango", "Kiwi"];
console.assert(x + y == 10, myArr1);
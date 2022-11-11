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

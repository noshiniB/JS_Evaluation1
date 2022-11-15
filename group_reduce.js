let Array1 = [
    { id: 1, Name: "edison" },
    { id: 2, Name: "Annand" },
    { id: 3, Name: "vasanth" },
]

// Accepts the array and key
const groups1 = (Array1, key) => {
    // Return the end result
    return Array1.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object
};

// Group by id as key to the Array1 array
const personGroupedByid = groups1(Array1, 'id');
console.log(personGroupedByid);

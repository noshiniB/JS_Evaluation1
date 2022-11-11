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
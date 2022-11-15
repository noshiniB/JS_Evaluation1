let Array2 = [
    { id: 1, Name: "edison" },
    { id: 2, Name: "Annand" },
    { id: 3, Name: "vasanth" },
]

const groupBy = (input, key) => {
    return input.reduce((acc, currentValue) => {
        let groupKey = currentValue[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(currentValue);
        return acc;
    }, {});
};

const group = groupBy(Array2, 'id');
console.log(group);
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
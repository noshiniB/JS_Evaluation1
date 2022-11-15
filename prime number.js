//To check if a number is prime or not 

let number = 1;
let isPrime = true;

// check if number is equal to 1
if (number == 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;

        }
    }

    if (isPrime == true) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

//if number is less than 1
else {
    console.log("The number is not a prime number.");
}


function Prime(num) {
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
console.log(Prime(4));
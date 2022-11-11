//To check palindrome

let p_string = "mom";
let reverseString = p_string.split('').reverse().join('');

if (p_string == reverseString) {
    console.log('It is a palindrome');
}
else {
    console.log('It is not a palindrome');
}

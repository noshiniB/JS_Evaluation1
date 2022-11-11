//Reverse a word in sentence

let s = ["i", "like", "this",
    "program", "very", "much"];
let ans = "";
for (let i = 5; i >= 0; i--) {
    ans += s[i] + " ";
}
console.log(ans);

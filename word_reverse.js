//Reverse a word in sentence

var s = ["i", "like", "this",
    "program", "very", "much"];
var ans = "";
for (var i = 5; i >= 0; i--) {
    ans += s[i] + " ";
}
console.log(ans);
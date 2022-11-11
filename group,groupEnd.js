/console.group/groupEnd

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
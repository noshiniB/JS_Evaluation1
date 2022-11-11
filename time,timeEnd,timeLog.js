//console.time/timeLog/timeEnd

/*

1. The time() method starts a timer in the console view.
2. The time() method allows you to time code for testing purposes.
3. we can run many timers at the same time
4. label parameter can be used to name different timers and it is optional
5. syntax : console.time(label)

1.The timeEnd() method ends a timer, and writes the result to the console.
2. The time() method allows you to time code for testing purposes.
3. we can run many timers at the same time
4. label parameter can be used to name different timers and it is optional
5. syntax : console.timeEnd(label)

1. The console.timeLog() method logs the current value of a timer that was previously started by calling console.time() to the console.
2. label parameter can be used to name the timeLog and it is optional
3. syntax : timeLog(label)
4. It returns the execution time


*/

console.time("time");
for (let i = 0; i < 100000; i++) {
}
console.timeLog("time");
console.timeEnd("time");
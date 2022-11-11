//console.trace()

/*

1. The trace() method displays a trace that show how the code ended up at a certain point.
2. label parameter can be used to name the trace and it is optional
3. console.trace(label)


*/

function first() {
    function second() {
        console.trace("tracing");
    }
    second();
}

first();
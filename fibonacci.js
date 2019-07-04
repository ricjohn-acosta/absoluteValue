const fib = (x) => {
    let array = [0, 1];

    // Fibonacci algorithm.
    for (let i = 2; i < x + 1; i++) {
        array.push(array[i - 2] + array[i - 1])
    }
    // Remove first element, last element and turn array into string.
    array.shift();
    array.pop();
    array.toString();
    return array
}

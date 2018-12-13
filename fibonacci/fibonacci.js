function fibonacci(number) {
    const seq = [1, 1];

    while (seq.length < number) {
        const lastItem = seq[seq.length - 1];
        const secondLastItem = seq[seq.length - 2];
        seq.push(lastItem + secondLastItem);
    }
    return seq;
}

console.time();
console.log(fibonacci(20));
console.timeEnd();
console.time();
console.log(fibonacci(6));
console.timeEnd();


// Memorized Fibonacci Sequence
const memFebonacci = (function () {
    const seq = [1, 1];
    return function (n) {

        if (seq.length > n) {
            seq.slice(0, n);
        }

        while (seq.length < n) {
            const lastItem = seq[seq.length - 1];
            const secondLastItem = seq[seq.length - 2];
            seq.push(lastItem + secondLastItem);
        }
        return seq;
    }
})();
console.log('-----------------------');
console.time();
console.log(memFebonacci(20));
console.timeEnd();
console.time();
console.log(memFebonacci(6));
console.timeEnd();
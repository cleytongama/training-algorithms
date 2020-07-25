
// 0 1 1 2 3 5 8 13 21 ...
function fibonacciInterative(index) {

    const fibonacci = [0, 1, 1]
    let countIndex = 2

    while (countIndex < index) {
        countIndex++
        fibonacci.push(fibonacci[countIndex - 2] + fibonacci[countIndex - 1]);
    }

    return fibonacci[index]

}

function fibonacciRecursive(index) {

    if (index < 2) {
        return index
    }

    return fibonacciRecursive(index - 2) + fibonacciRecursive(index - 1)
}
console.log(fibonacciInterative(43))
console.log(fibonacciRecursive(43))

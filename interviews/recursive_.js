function findFactorialIterative(number) {

    if (number < 0) return undefined

    if (number === 0 || number === 1) {
        return 1
    }

    let factorial = number - 1;

    while (factorial !== 0) {
        number = number * factorial;
        factorial--
    }

    return number
}

function findFactorialRecursive(number) {
    console.trace()
    return (number === 0 || number === 1) ? 1 : number * findFactorialRecursive(number - 1)
}

function findFactorialRecursiveFor(number) {
    if (number < 0) return undefined

    let total = 1

    for (let n = number; n > 1; n--) {
        total = total * n
    }

    return total
}

// console.log(findFactorialIterative(5))

console.log(findFactorialRecursive(5))

// console.log(findFactorialRecursiveFor(5))
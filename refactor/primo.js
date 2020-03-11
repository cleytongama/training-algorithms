
const isEvenAndNotTwo = (num) => num % 2 === 0 && num !== 2

const hasIntegerSquareRoot = (num) => Number.isInteger(Math.sqrt(num))

const hasDivisor = (num) => {
    for (let i = Math.floor(num / 2); i > 1; i--) {
        if (num % i === 0) {
            return true;
        }
    }
    return false
}

const isPrime = (num) => !(isEvenAndNotTwo(num) || hasIntegerSquareRoot(num) || hasDivisor(num))

console.log(isPrime(4))

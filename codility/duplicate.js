function duplicate(arr) {
    const duplicateArray = (Array.isArray(arr) ? arr.concat(...arr) : [])
    return duplicateArray
}

console.log(duplicate([1, 2, 3, 4, 5]))


let number = 0
// console.log(number++)
// console.log(++number)
// console.log(number)

const foo = (function outer() {
    let count = 0;
    return function inner() {
        return count++;
    }
})()

console.log(foo()) //
console.log(foo()) //


const blackWhite = (() => {
    let isBlack = false;

    return () => {
        isBlack = !isBlack;
        return isBlack ? 'black' : 'white';
    }
})()


console.log(blackWhite())
console.log(blackWhite())
console.log(blackWhite())

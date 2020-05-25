function RangeBitCount(a, b) {
    let count = 0
    while (a <= b) {
        count += a.toString(2).match(/(1){1}/g).length
        a++
    }
    return count
}

console.log(RangeBitCount(2, 7))

let idade = 29
console.log(++idade)
console.log(idade)

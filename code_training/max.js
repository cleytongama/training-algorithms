const numbers = [1, 10, 4, 8, 5, 7, 12];
let a = 0;
for (let num of numbers) {
    if (num > a) {
        a = num
    }
}
console.log(a)


const value2 = numbers.reduce((acc, current) => {
    console.log(acc, current)
    return acc > current ? acc : current
})

console.log(value2)
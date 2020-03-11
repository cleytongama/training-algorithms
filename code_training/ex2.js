let numbers = [9, 3, 9, 3, 9, 7, 9]

let repet = {};
for (let num of numbers) {
    if (num in repet) {
        delete repet[num]
    } else {
        repet[num] = num;
    }
}

const removeNaoParesRepitidos = numbers.reduce((acc, current, index, a) => {
    if (current in acc) {
        delete acc[current]
    } else {
        acc[current] = current
    }
    return acc
}, {})

console.log(removeNaoParesRepitidos)
console.log(repet)
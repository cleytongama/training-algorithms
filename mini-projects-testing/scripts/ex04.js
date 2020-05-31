const vetor = [1, 2, 3, 4, 1, 1]

// let numberCounter =  vetor.map((number, index, array) => {
//     return {
//         number,
//         counter: array.filter((item) => number === item).length
//     }
// })
let numberCounter = vetor.reduce((acc, atual) => {

    if (atual in acc) {
        acc[atual]++
    } else {
        acc[atual] = 1
    }
    console.log(acc)
    return acc
}, {})

console.log(numberCounter)

// vetor.reduce((acumulador, atual) => console.log(atual, acumulador), 0)
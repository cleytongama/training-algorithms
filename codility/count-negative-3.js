const matrix = [
    [-1, 2, [-3], 4],
    [2, 3, 4, -5],
    [-3, 4, 5, -6]
]

const a = [2]
const b = [2]

console.log(b.concat(a))



function arrayOnly(matrix) {
    const matrixOnly = matrix.reduce((acc, current) => {
        // console.log(current)
        let currentArray = Array.isArray(current) ? arrayOnly(current) : current
        return acc.concat(currentArray)
    }, [])
    return matrixOnly
}

const uniqueArray = arrayOnly(matrix)

console.log(uniqueArray)

console.log(new Date().getTime())
console.log(Date.now())

// function flatten(arr) {
//     return arr.reduce(function (flat, toFlatten) {
//         console.log(toFlatten)
//         return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//     }, []);
// }

// const matrixPlain = flatten(matrix);

// console.log(matrixPlain)
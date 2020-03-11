
const add = (sum) => (sum < 30) ? add(sum + 1) : sum

console.log(add(0))

const matrix = [
    [-1, 2, 3, 4, [1, 2]],
    [2, 3, 4, -5],
    [-3, 4, 5, -6]
]

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

console.log(flatten(matrix))
const array = [
    [3, -2, -1, 1],
    [-2, -2, 3, 4],
    [4, 5, 7, 8]
]

function main(array) {

    const lengthArrayNumbers = array.length
    let count = 0
    let numbersNegatives = 0

    while (count < lengthArrayNumbers) {
        numbersNegatives += countNegative(array[count])
        count++
    }

    return numbersNegatives
}

function countNegative(array) {
    const result = array.reduce((acc, current) => {
        acc = current < 0 ? [...acc, current] : acc
        return acc
    }, []).length

    return result
}


console.log(countNegative(array[0]))

const array = [
    [-3, -2, -1, -1],
    [2, 2, -3, -4],
    [4, 5, 7, -1]
]

function main(array) {
    let line = 0;
    let column = array[line].length - 1
    let count = 0
    while (line < array.length && column >= 0) {
        //verifica se a primeira linha é tudo negativo
        if (array[line][column] < 0) {
            count += column + 1
            line++
        } else {
            column--
        }
    }
    return count
}


console.log(main(array))
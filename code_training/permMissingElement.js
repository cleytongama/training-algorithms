function permMissingElement(N) {
    let numberMissing = null;
    let arrayOrder = N.sort((a, b) => a - b)

    arrayOrder.forEach((element, index, array) => {
        if (element !== array[array.length - 1]) {
            if (element !== array[index + 1] - 1) {
                numberMissing = array[index] + 1
            }
        }
    })

    return numberMissing;
}

function permMissingElement2(N) {
    let numberMissing = null;
    let sumOne = 0;
    let sumTwo = 0;
    const total = N.length;
    N.forEach((element, index, array) => {
        sumOne += array[index];
        sumTwo += index + 1

    })

    sumTwo += total + 1;
    numberMissing = sumTwo - sumOne;

    return numberMissing;
}

console.log(permMissingElement([2, 1, 3, 5]))
console.log(permMissingElement2([2, 1, 3, 4, 6]))
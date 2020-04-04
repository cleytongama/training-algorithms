const array1 = ['a', 'b', 'c', 'd']
const array2 = ['c']

// Type 1
function containCommonItem1(array1, array2) {
    let contain = false
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                contain = true
            }
        }
    }
    return contain;
}
// Type 2
function containCommonItem2(array1, array2) {
    const arrayInObject = array1.reduce((acc, current) => {
        acc[current] = current
        return acc;
    }, {})

    for (let element of array2) {
        if (arrayInObject[element]) {
            return true;
        }
    }
    return false;
}
// Type 3
function containCommonItem3(array1, array2) {
    return array1.some((element) => array2.includes(element))
}

console.log(containCommonItem1(array1, array2))
console.log(containCommonItem2(array1, array2))
console.log(containCommonItem3(array1, array2))
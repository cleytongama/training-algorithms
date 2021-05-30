const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectSort(array) {

    const length = array.length
    for (let i = 0; i < length; i++) {
        let indexMin = i
        for (let j = i; j < length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
        }
        [array[i], array[indexMin]] = [array[indexMin], array[i]]
    }
}


console.log(selectSort(numbers));
console.log(numbers);
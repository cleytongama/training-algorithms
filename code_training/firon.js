const num = 10
let aux = 1
let i = 0
const array = []
function firon(N) {
    while (i < N) {
        if ((i === 0 || i === 1)) {
            array[i] = (aux);
            i++
            continue
        } else if (i === 2) {
            array[i] = i;
        }
        i++
        array[i] = array[i - 2] + array[i - 1]
    }

    return array
}

// for (let i = 0; i < 10; i++) {
// if () {
//     array[i] = aux;
//     continue
// } else if (i === 2) {
//     array[i] = i;
// }

//     array[i] = (i === 0 || i === 1) ? aux : i


//     array[i] = array[i - 2] + array[i - 1]

// }
// Com map e reduce


firon(10)
console.log(array)
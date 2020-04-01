const vetor = [1, 2, 3, 4, 5, 7, 8, 9]
let first = 0
let last = vetor.length
let value = 9

function buscaBinaria(vetor, value) {

    while (first <= last) {
        const index = Math.floor((last + first) / 2)
        if (value < vetor[index]) {
            last = index - 1
            continue;
        }

        if (value > vetor[index]) {
            first = index + 1
            continue;
        }

        if (vetor[index] === value) {
            return { value, index }
        }

        return false
    }

}

function buscaBinariaRecursive(vetor, first, last, value) {

    if (first <= last) {
        const index = Math.floor((last + first) / 2)

        if (vetor[index] === value) {
            return { value, index }
        }

        if (value < vetor[index]) {
            buscaBinariaRecursive(vetor, first, index - 1, value)
        }

        if (value > vetor[index]) {
            buscaBinariaRecursive(vetor, index + 1, last, value)
        }

        return false
    }
}


console.log(buscaBinaria(vetor, value))
console.log(buscaBinariaRecursive(vetor, first, last, value))


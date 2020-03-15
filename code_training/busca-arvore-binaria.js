const arvore = {}

function insert(arvore, value) {
    if (arvore.value) {
        if (value > arvore.value) {
            return insert(arvore.right, value)
        } else {
            return insert(arvore.left, value)
        }
    } else {
        arvore.value = value
        arvore.right = {}
        arvore.left = {}

        return { ...arvore }
    }
}


function search(arvore, value) {

    if (!arvore.value || arvore.value === value) {
        return arvore.value
    }

    if (value < arvore.value) {
        return search(arvore.left, value)
    }

    return search(arvore.rigth, value)
}

console.log(insert(arvore, 10))
console.log(insert(arvore, 11))
console.log(insert(arvore, 12))
console.log(insert(arvore, 2))



console.log(arvore)
console.log(search(arvore, 1))
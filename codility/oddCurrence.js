let A = [5, 3, 10, 10, 10, 9, 9]


const repitidos = A.filter((el, index, a) => {
    return a.indexOf(el) !== index

})

const removeRepitidos = A.reduce((acc, current, index, a) => {
    if (acc.includes(current)) {
        acc.splice(index, 1)
    } else {
        acc = [...acc, current]
    }
    return acc
}, [])

const removeNaoParesRepitidos = A.reduce((acc, current, index, a) => {
    if (current in acc) {
        delete acc[current]
    } else {
        acc[current] = current
    }
    return acc
}, {})

const numRepited = A.reduce((acc, current, index, a) => {
    if (current in acc) {
        acc[current]++
    } else {
        acc[current] = 1
    }
    return acc
}, {})

// const objs = new Object(numRepited)
let arr = []
for (let o in numRepited) {
    if (numRepited[o] === 1) {
        arr = [...arr, o]
    }
}
console.log(arr)
console.log(numRepited)
console.log(repitidos)
console.log(removeRepitidos)
console.log(Object.values(removeNaoParesRepitidos))

// console.log(Object.values(test))
// console.log(arr)

// objRepited.forEach((el, i, arr) => {

// })


const Person = (name) => {
    let count = 0

    return {
        count: () => ++count,
        name: name,
        'type': 'person'
    }
}

const cleyton = Person('cleyton')
const samantha = Person('samantha')
// console.log(cleyton.count())
// console.log(cleyton.count())
// console.log(samantha.count())

//-----------------------------------------

function funTest(at1, at2) {
    console.log(this, at1, at2)
}

const vetor = [1, 2]

// const maior =  

// 4 formas diferentes ...
console.log(vetor.sort((a, b) => a - b)[vetor.length - 1])
console.log(Math.min.apply(null, vetor))
console.log(Math.min(...vetor))
console.log(Math.max(...vetor))


function factory(N) {
    if (N === 0) {
        return N
    }
    if (N === 1) {
        return N
    }

    return N * factory(N - 1)
}

console.log(factory(8))
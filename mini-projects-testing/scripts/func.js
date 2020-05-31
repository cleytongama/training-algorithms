// function retorno(A, B) {

//     if (A.length !== B.length) {
//         return false
//     }

//     for (let i = 0; i < A.length; i++) {
//         if (A[i] !== B[i]) {
//             return false
//         }
//     }

//     return true
// }

const pessoa = [
    {
        nome: "Cleyton",
        idade: 1
    },
    {
        nome: "Paulo",
        idade: 2
    },
    {
        nome: "Bruno",
        idade: 3
    }
]

// map => Quando quero modificar alguma propriedade dentro do meu array
// filter => Serve para filtrar alguma informca
// reduce => 

// const namesMod = pessoa.map(function (value, index, array) {

//     if (index === 0) {
//         console.log(value)
//     }

//     value.nome = "Maria"

//     return value
// })

// const filter = pessoa.filter(function (value, index, array) {
//     return value.idade > 15
// })
const reduce = pessoa.reduce(function (acc, current, index, array) {

    acc += current.idade

    return acc
}, 0)

console.log(reduce)
// console.log(namesMod)


// const B = [1, 2, 3, 4]

// // retorno(A, B)
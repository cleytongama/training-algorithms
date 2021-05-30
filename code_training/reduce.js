// [0, 1, 2, 3, 4].reduce(function (Acumulador, valorAtual, indice, array) {
//     console.log(indice)
//     return Acumulador + valorAtual;
// });

// // return;
// const total = [90, 50, 4, 2, 80, 6, 1, 4]


// const func = (acc, current) => {

//     // return acc < current ? acc : current
//     return Math.min(acc, current)
// }

// //Retornando o maior ou menor valor
// const result = total.reduce(func)

// console.log(result)


// // Verificando se todos os valores dentro do array são válidos
// const checkTrue = ((acc, current) => (!!(acc && current)))

// const ok = [1, 2, 3, 4, 'ola', null, true].reduce(checkTrue)


// console.log(ok)

// // Gerar erro
// const arr2 = []
// const result2 = arr2.reduce((acc, current) => acc + current, 0)

// console.log(result2)

// // Soma de valores de um objeto de um array

// let soma = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (acumulador, valorAtual) {
//     return acumulador + valorAtual.x;
// }, 0)
// console.log("soma dos valores de um objeto de uma array", soma, "\n")

// //Reducao de um array de array
// const n = [[2, 1], [2, 3], [4, 5, [1, 2]]]
// function reduzindo(N) {
//     return N.reduce((acc, current) => {
//         const currentIsNotArray = Array.isArray(current) ? reduzindo(current) : current
//         return acc.concat(currentIsNotArray)
//     }, [])
// }
// console.log("Redução de um array de array", reduzindo(n))

//Contando valores iguais em um objeto
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countNames = names.reduce((acc, current) => {

    acc[current] = (acc[current] || 0) + 1

    return acc
}, {})
console.log("Contando valores iguais em um objeto", countNames)

// Agrupando por propriedade
const pessoas = [
    { nome: 'Alice', idade: 21 },
    { nome: 'Max', idade: 20 },
    { nome: 'Max', idade: 25 }
];


function groupByProperty(array, property) {
    const groups = array.reduce((acc, current) => {
        let key = current[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(current)
        return acc
    }, {})
    return groups
}
const groups = groupByProperty(pessoas, 'nome');
console.log("Agrupando valores por parametros", groups)

// Juntando todos os books
const friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

let books = []

for (friend of friends) {
    books = [...books, ...friend.books]
}

const allBooks = friends.reduce((acc, current) => {
    return [...acc, ...current.books]
}, [])

console.log(allBooks)

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 6, 3, 4, 4, 4, 4];
let result = arr.reduce((acc, current) => {
    acc[current] = current
    return acc
}, {});
console.log(result);

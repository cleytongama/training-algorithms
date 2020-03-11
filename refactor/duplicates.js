let values = [
    {
        "value": "ETH",
        "label": "ETH"
    },
    {
        "value": "LTC",
        "label": "LTC"
    },
    {
        "value": "ETH",
        "label": "ETH"
    }
]

console.log(values);

let name = [
    {
        "id": 1
    },
    {
        "id": 2
    },
    {
        "id": 3
    }
];

let name2 = [
    {
        "id": 1
    },
    {
        "id": 2
    },
    {
        "id": 3
    },
    {
        "id": 4
    },
    {
        "id": 5
    }
];

// let names = name.concat(name2)
// let acc = [];
// for (let n of names) {
//     if (acc.includes(JSON.stringify(n))) {
//         acc = acc.filter((item) => item !== JSON.stringify(n))
//     } else {
//         acc = [...acc, JSON.stringify(n)]
//     }
// }

// acc = acc.map((item) => JSON.parse(item))
let names = name.concat(name2)
let acc = [];
for (let n of names) {
    if (acc.includes(JSON.stringify(n))) {
        acc = acc.filter((item) => item !== JSON.stringify(n))
    } else {
        acc = [...acc, JSON.stringify(n)]
    }
}

acc = acc.map((item) => JSON.parse(item))

console.log(acc)

// const findAllWidoutId = (id) => {
//     return name.filter((item) => item.id !== id)
// }


// console.log(JSON.stringify(name[0]) === JSON.stringify(name2[0]))
// console.log(findAllWidoutId(1))


// name.splice(index, 1)

// console.log(name)
// if (JSON.stringify(values[0]) === JSON.stringify(values[1])) {
//     console.log("acertou")
// }
// // let arr = []
// for (let o of values) {
//     console.log(JSON.stringify(o))
//     // if (numRepited[o] === 1) {
//     //     arr = [...arr, o]
//     // }
// }

// const removeNaoParesRepitidos = values.reduce((acc, current, index, a) => {
//     if (JSON.stringify(current) in acc) {
//         delete acc[JSON.stringify(current)]
//     } else {
//         acc[JSON.stringify(current)] = JSON.stringify(current)
//     }
//     return acc
// }, {})

// console.log([JSON.parse(Object.values(removeNaoParesRepitidos))])

// values = values.filter(function (a) {
//     return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
// }, Object.create(null))

// console.log(values)


// const arr1 = ['a', 'b', 'c', 'a']

// const removeRepitidos = arr1.reduce((acc, current, index, a) => {
//     if (acc.includes(JSON.stringify(current))) {
//         acc.splice(index, 1)
//     } else {
//         acc = [...acc, JSON.stringify(current)]
//     }
//     return acc
// }, [])

// console.log(removeRepitidos, "repe")

// const numRepited = arr1.reduce((acc, current, index, a) => {
//     if (current in acc) {
//         acc[current]++
//     } else {
//         acc[current] = 1
//     }
//     return acc
// }, {})

// // const objs = new Object(numRepited)
// let arr = []
// for (let o in numRepited) {
//     if (numRepited[o] === 1) {
//         arr = [...arr, o]
//     }
// }

// console.log(arr)


// const filter = arr1.filter((item, index, array) => {
//     if (array[] === index) {
//         console.log(item)
//     }
//     return array.indexOf(item) !== index
// })

// console.log(filter)
    // {
    //     "id": 1,
    //     "nome": "Cleyton"
    // },
    // {
    //     "id": 2,
    //     "nome": "Sam"
    // },
    // {
    //     "id": 3,
    //     "nome": "Luisa"
    // },
    // {
    //     "id": 1,
    //     "nome": "Cleyton"
    // },
    // {
    //     "id": 1,
    //     "nome": "Cleyton"
    // }

// let arr2 = []
// for (let a in arr1) {
//     if (arr2.find((item) => item.id === arr1[a].id)) {
//         arr2.splice(a, 1);
//     } else {
//         arr2.push(arr1[a]);
//     }
// }

// console.log(arr2)
// const arrStorage = [
//     {
//         "id": 2,
//         "nome": "Sam"
//     }
// ]
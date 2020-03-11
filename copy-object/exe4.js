const obj1 = {
    name: "Cleyton",
    idade: "30",
    endereco: {
        rua: "Av Fagundes Filho, 789"
    }
}

const obj2 = { ...obj1 }

obj2.endereco.rua = "Almeda das rosas, 7"
obj2.name = "Cleyton Gama"

console.log(obj1)
console.log(obj2)

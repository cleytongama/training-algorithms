const obj1 = {
    name: "Cleyton",
    idade: "30",
    endereco: {
        rua: "Av Fagundes Filho, 789"
    },
    sexo: () => "masculino"
}

const obj2 = JSON.parse(JSON.stringify(obj1))

obj2.endereco.rua = "Almeda das rosas, 7"
obj2.name = "Cleyton Gama"

console.log(obj1)
console.log(obj2)
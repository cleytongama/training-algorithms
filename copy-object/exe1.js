const pessoa1 = {
    nome: "Cleyton",
    idade: "30",
    endereco: {
        rua: "Av Fagundes Filho, 789"
    }
}

const pessoa2 = Object.assign({}, pessoa1)

pessoa2.endereco.rua = "Almeda das rosas, 7"
pessoa2.nome = "Cleyton Gama"


// console.log(pessoa1)
function Pessoa(nome, sobrenome) {

    let pessoa = {}

    pessoa.nome = nome
    pessoa.sobrenome = sobrenome

    function nomeCompleto() {
        return `${pessoa.nome}-${pessoa.sobrenome}`
    }

    return pessoa
}

console.log(Pessoa("Cleyton", "Gama"))




[
    {
        nome: "Alberto",
        email: "alberto@gmail.com"
    },
    {
        nome: "Zup SP",
        email: "souzup@gmail.com"
    },
    {
        nome: "Zup Uberlandia",
        email: "souzup@gmail.com"
    },
    {
        nome: "Maria",
        email: "maria@gmail.com"
    }
]
// Lista de items
const nomes = ["Item1", "Item2", "Item3"]

// Seleciona a div que quer adicionar a lista
const dados = document.querySelector("#dados-pessoais")

// Cria sua ul para inserir os li`s da lista
const ul = document.createElement("ul")

// Criando um li para cada iem que deseja inserir na lista
const li1 = document.createElement("li")
const li2 = document.createElement("li")

// Adiciona o conteudo do Li
li1.innerText = "Meu Primeiro Item"
li2.innerText = "Meu Segundo Item"

// Inseri os li's no ul
ul.append(li1)
ul.append(li2)

// Inseri na div o ul com os li's
dados.append(ul)

// Criando dinamicamente
const dados = document.querySelector("#dados-pessoais")
const ul = document.createElement("ul")

const items = ["Item1", "Item2", "Item3"]

for (let item of items) {
    let li = document.createElement("li")
    li.innerText = item
    ul.append(li)
}

dados.append(ul)
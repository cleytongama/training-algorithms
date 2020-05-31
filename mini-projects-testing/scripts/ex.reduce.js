const produtos = [
    { id: 1, preco: 2, qtd: 2 },
    { id: 2, preco: 3, qtd: 3 }
]

const subtotal = (item) => item.preco * item.qtd

const sumTotal = (soma, item) => item + soma

const total = produtos
    .map(subtotal)
    .reduce(sumTotal, 0)

console.log(total)
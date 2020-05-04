const head = {
    valeu: 10,
    next: {
        value: 11,
        next: null
    }
}

// iniciando
let first = head
let second = first.next // { value: 11, next: this.head }

// referenciando
let temp = second.next //* Atribuindo a proxima interacao (Guardando em uma variavel temp)

second.next = first

first = second

second = temp  //* Passando a proxima interacao

head.next = null

console.log(head)
console.log(first)
console.log(second)

 // Montando uma lista de tras pra frente
/*

[10, 11, 12, 13]


thid.head = { value: 10, next: { value: 11, next: { value: 12, next: null } } }

let first = thid.head
let second = first.next

first >> this.head = { value: 10, next: { value: 11, next: { value: 12, next: { value: 13, next: null } } } }

second >> this.head.next = { value: 11, next: { value: 12, next: { value: 13, next: null } } }


WHILE(SECOND){
    temp = second.next => { value: 12, next: { value: 13, next: null } }

    SECOND.NEXT = first >> this.head
    { value: 11, next: this.head }

    FIRST = SECOND >> { value: 11, next: this.head }


    SECOND = { value: 12, next: { value: 13, next: null } }

}


WHILE(SECOND){
    TEMP = SECOND.NEXT >> next: { value: 13, next: null }

    SECOND.NEXT = { value: 11, next: this.head }

    FIRST = { value: 12, next: { value: 11, next: this.head } }

    SECOND = next: { value: 13, next: null }

}

WHILE(SECOND){
    TEMP = SECOND.NEXT >> NULL

    SECOND.NEXT = { value: 12, next: { value: 11, next: this.head } }

    FIRST = { value: 13, next: { value: 12, next: { value: 11, next: this.head } } }

    SECOND = TEMP >> NULL

}

FIRST = { value: 13, next: { value: 12, next: { value: 11, next: this.head } } }

this.head = { value: 10, next: { value: 11, next: { value: 12, next: null } } }

this.head.next = null

FIRST = {
    value: 13, next: { value: 12, next: { value: 11, next: { value: 10, next: null } } }

this.head = first

*/
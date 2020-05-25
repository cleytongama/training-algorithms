class Stack {
    constructor() {
        this.array = []
    }

    peek() {
        return this.array[this.array.length - 1]
    }
    push(value) {

        this.array.push(value)

        return this
    }
    pop() {
        return this.array.pop()
    }

    isEmpty() {
        return this.length === 0
    }

    print() {
        console.log(this)
    }
}

const myStack = new Stack()

myStack.push("Discord")
myStack.push("Udemy")
myStack.push("google")
myStack.push("gmail")
console.log(myStack.pop())
// myStack.print()
// console.log(myStack.peek())

myStack.print()


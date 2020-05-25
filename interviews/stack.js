class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.booton = null
        this.length = 0
    }

    peek() {
        return this.top
    }
    push(value) {
        const newNode = new Node(value)

        if (this.isEmpty()) {
            this.top = newNode
            this.booton = newNode
            this.length++
            return this
        }

        let currentTop = this.top
        this.top = newNode
        newNode.next = currentTop

        this.length++
        return this
    }
    pop() {

        if (this.length === 1) {
            this.resetStack()
            return null
        }

        const oldCurrentTop = this.top

        this.top = oldCurrentTop.next

        this.length--
        return this

    }

    isEmpty() {
        return this.length === 0
    }

    print() {
        console.log(this)
    }

    resetStack() {
        this.top = null
        this.booton = null
        this.length = 0

    }
}

const myStack = new Stack()

// myStack.push("Discord")
// myStack.push("Udemy")
myStack.push("google")
myStack.push("gmail")
myStack.print()
myStack.pop()

myStack.print()


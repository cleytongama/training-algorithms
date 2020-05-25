class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newValue = new Node(value)
        if (this.length === 0) {
            this.first = newValue
            this.last = newValue
            this.length++
            return this
        }

        const oldLast = this.last
        oldLast.next = newValue
        this.last = newValue

        return this
    }
    dequeue() {
        if (this.length === 1) {
            this.resetStack()
            return null
        }

        this.first = this.first.next
        this.length--
        return this
    }

    print() {
        console.log(this)
    }

    resetQueue() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Joy")
myQueue.enqueue("Matt")
myQueue.enqueue("Pavel")
myQueue.peek()
myQueue.print()
  //Joy
  //Matt
  //Pavel
  //Samir


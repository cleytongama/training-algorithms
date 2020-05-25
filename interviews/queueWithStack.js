
class QueueStack {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue() {
        const length = this.last.length
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop())
        }
        this.first.pop()
    }
    peek() {
        if (this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1];
    }
}

const queueAndStack = new QueueStack()

console.log(queueAndStack.enqueue("Cleyton"))
console.log(queueAndStack.enqueue("Bruno"))
console.log(queueAndStack.enqueue("Luisa"))

console.log(queueAndStack.dequeue())
console.log(queueAndStack.enqueue("Samantha"))
class DoublyLinkedListClass {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prex: null
        }
        this.tail = this.head
        this.length = 1
    }

    no(value) {
        return {
            value,
            next: null,
            prev: null
        }
    }

    append(value) {

        let node = this.no(value)

        node.prev = this.tail

        this.tail.next = node

        this.tail = node

        this.length++

        return this

    }


    getBeforeNode(index) {

        let node = this.head
        let count = 0

        while (count !== index) {
            node = node.next
            count++
        }

        return node
    }


    prepend(value) {

        let node = this.no(value)

        node.next = this.head

        this.head.prev = node

        this.head = node

        this.length++

        return this

    }

    insert(index, value) {

        let newNode = this.no(value)

        if (index >= this.length) {
            this.append(value)
            return this
        }

        if (index === 0) {
            this.prepend(value)
            return this
        }

        let beforeNode = this.getBeforeNode(index - 1)

        const nodeNextOldBefore = beforeNode.next

        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = nodeNextOldBefore
        nodeNextOldBefore.prev = newNode

        this.length++

        return this
    }

    remove(index) {

        let indexCurrent = index
        let lastNode = false

        if (indexCurrent >= this.length - 1) {
            indexCurrent = this.length - 1
            lastNode = true
        }

        if (indexCurrent === 0) {
            this.head = this.head.next
            return this
        }

        let beforeNode = this.getBeforeNode(indexCurrent - 1)

        const nodeRemove = beforeNode.next

        beforeNode.next = nodeRemove.next

        if (lastNode) {
            this.tail = beforeNode
        }

        this.length--

        return this
    }

    print() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }

    reverse() {

    }
}
// 10 << >> 11 << >> 12  << >> 13


const doublyLinkedList = new DoublyLinkedListClass(10)

console.log(doublyLinkedList.append(11))
console.log(doublyLinkedList.append(12))
console.log(doublyLinkedList.prepend(1))
console.log(doublyLinkedList.print())






class MyLikedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    no(value) {
        return {
            value,
            next: null
        }
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

    append(value) {

        let node = this.no(value)

        this.tail.next = node

        this.tail = node

        this.length++

        return this
    }

    prepend(value) {

        let node = this.no(value)

        node.next = this.head

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

        newNode.next = nodeNextOldBefore

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

    get(value) {

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

        if (!this.head.next) {
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;

        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;

        this.head = first;

    }
}
// 10 >> 16 >> 4 
// 10 >> 2 >> 16 >> 4 

const mylikedList = new MyLikedList(10)


mylikedList.append(11)
mylikedList.append(12)




// mylikedList.append(13)
mylikedList.reverse()
console.log(mylikedList.print())

// console.log(mylikedList.append(16))
// console.log(mylikedList.remove(8))
// mylikedList.append(17)
// mylikedList.print()
// console.log(mylikedList.append(5))
// console.log(mylikedList.append(8))
// console.log(mylikedList.prepend(2))
// console.log(mylikedList.insert(0, 2))
// mylikedList.print()
// console.log(mylikedList.insert(100, 2))

// mylikedList.print()
// console.log(mylikedList.append(17))

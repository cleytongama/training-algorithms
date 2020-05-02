function LinkedList() {

    let head = null;
    let tail = null;
    let length = 0;


    let No = (value) => {
        return {
            value,
            next: null
        }
    }

    const add = (value) => {
        if (!head) {
            head = No(value)
            length++
            return head
        }

        let node = head

        while (node.next) {
            node = node.next
        }

        node.next = No(value)
        length++
        return node
    }
    const add2 = (value) => {
        if (!head) {
            head = No(value)
            length++
            tail = head
            return head
        }

        let node = No(value)

        tail.next = node

        tail = node
        length++
        return node
    }

    const getByIndex = (index) => {
        if (length === 0 || index >= length)
            return null

        let count = 0
        let node = head
        while (count < index && node.next) {
            node = node.next
            count++
        }

        return node
    }

    const getByValue = (value) => {

        let node = head

        if (length === 0)
            return null

        while (value !== node.value && node.next) {
            node = node.next
        }

        if (!node.next && node.value !== value)
            return null

        return node
    }

    const print = () => console.log(head)

    const remove = (node) => {

        // whitout node
        if (length === 0) {
            return undefined
        }

        // remove first node
        if (node === head) {
            head = node.next
            return head
        }

        let currentNode = head

        while (currentNode.next && currentNode.next !== node) {
            currentNode = currentNode.next
        }

        currentNode.next = node.next

    }

    return {
        length: () => length,
        add,
        add2,
        print,
        remove,
        getByIndex,
        getByValue
    }
}

const list = LinkedList()

list.add2(1)
list.add2(2)
list.add2(3)
// list.add2(4)
// list.add2(2)

list.print()
const node = list.getByValue(2)

list.remove(node)
list.print()

// list.add2(3)
// list.add2(2)

console.log(list.length())

// console.log(list.getByIndex(5))
// console.log(list.getByValue(3))

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

        let node = this.head
        let newNode = this.no(value)
        let beforeNode = null

        if (index >= this.length) {
            this.append(value)
            return this
        }

        if (index === 0) {
            this.prepend(value)
            return this
        }

        while (index > 0) {
            beforeNode = node
            node = node.next
            index--
        }

        beforeNode.next = newNode
        newNode.next = node

        this.length++
        return this
    }

    remove(index) {

        let nodeFound = this.head
        let beforeNode = null

        if (index === 0) {
            this.head = this.head.next
            return this
        }

        while (index !== 0) {
            beforeNode = nodeFound
            nodeFound = nodeFound.next
            index--
        }

        beforeNode.next = nodeFound.next

        return this
    }

    get(value) {

    }

    print() {
        console.log(JSON.stringify(this.head))
    }
}
// 10 >> 16 >> 4 
// 10 >> 2 >> 16 >> 4 

const mylikedList = new MyLikedList(10)

console.log(mylikedList.append(11))
console.log(mylikedList.append(12))
console.log(mylikedList.append(13))
console.log(mylikedList.append(14))
console.log(mylikedList.append(15))
console.log(mylikedList.append(16))
mylikedList.print()
mylikedList.remove(1)
// console.log(mylikedList.append(5))
// console.log(mylikedList.append(8))
// console.log(mylikedList.prepend(2))
// console.log(mylikedList.insert(0, 2))
// console.log(mylikedList.insert(100, 2))

mylikedList.print()
console.log(mylikedList.append(17))

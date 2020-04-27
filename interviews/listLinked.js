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


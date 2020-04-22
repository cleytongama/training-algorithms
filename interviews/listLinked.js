function LinkedList() {

    let head = null;
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

    return {
        length: () => length,
        add,
        print,
        getByIndex,
        getByValue
    }
}

const list = LinkedList()

list.add(10)
list.add(5)
list.add(3)
console.log(list.print())

// console.log(list.getByIndex(5))
console.log(list.getByValue(3))

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)

        // verificar se é o primeiro nó da árvore
        if (this.root === null) {
            this.root = newNode
        } else {
            // verificar se vai para o lado direito ou esquerdo
            let current = this.root
            while (true) {
                if (value < current.value) {
                    // condição de parada até encontrar algum nó null em left
                    if (!current.left) {
                        current.left = newNode
                        return this;
                    }
                    // muda o ponteiro
                    current = current.left
                } else {
                    if (!current.right) {
                        current.right = newNode
                        return this
                    }
                    current = current.right
                }
            }
        }
    }
    lookup(value) {
        //Code here
    }
    // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(10)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}





// const newNode = new Node(value)

// if (this.root === null) {
//     this.root = newNode
// } else {
//     let currentNode = this.root

//     while (true) {
//         // LETF 
//         if (value < currentNode.value) {
//             if (!currentNode.left) {
//                 currentNode.left = newNode
//                 return this
//             }
//             currentNode = currentNode.left

//         } else {
//             //RIGHT
//             if (!currentNode.right) {
//                 currentNode.right = newNode
//                 return this
//             }
//             currentNode = currentNode.right
//         }
//     }
// }
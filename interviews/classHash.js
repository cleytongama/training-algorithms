class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key)

        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        const address = this._hash(key)
        const currentBucket = this.data[address]
        console.log(currentBucket)
        if (currentBucket.length) {
            for (let index = 0; index < currentBucket.length; index++) {
                if (currentBucket[index][0] === key) {
                    return currentBucket[index][1]
                }
            }
        }
        return undefined
    }

    Mykeys(data) {
        if (!data.length) {
            return undefined
        }
        let keys = []
        for (let arr of data) {
            if (arr[0] !== undefined) {
                let concatConditionArr =
                    arr.length > 1 && Array.isArray(arr)
                        ? this.Mykeys(arr)
                        : arr

                keys = [].concat(keys, concatConditionArr)
            }
        }
        return keys
    }
    // keys() {
    //     const keysArray = [];
    //     console.log(this.data.length);
    //     for (let i = 0; i < this.data.length; i++) {
    //         if (this.data[i]) {
    //             keysArray.push(this.data[i][0][0])
    //         }
    //     }
    //     return keysArray;
    // }

    // keys() {
    //     if (!this.data.length) {
    //         return undefined
    //     }
    //     let result = []
    //     // loop through all the elements
    //     for (let i = 0; i < this.data.length; i++) {
    //         // if it's not an empty memory cell
    //         if (this.data[i] && this.data[i].length) {
    //             // but also loop through all the potential collisions
    //             if (this.data.length > 1) {
    //                 for (let j = 0; j < this.data[i].length; j++) {
    //                     result.push(this.data[i][j][0])
    //                 }
    //             } else {
    //                 result.push(this.data[i][0])
    //             }
    //         }
    //     }
    //     return result;
    // }
}

const myHashTable = new HashTable(2);


myHashTable.set('apples', 12)
myHashTable.set('macas', 9)
myHashTable.set('teste', 9)
myHashTable.set('b', 9)
myHashTable.set('c', 9)
myHashTable.set('d', 11)
myHashTable.set('f', 9)
myHashTable.set('h', 9)

const data = myHashTable.data
console.log(myHashTable.Mykeys(data))

// console.log(myHashTable.get('c'))
// // console.log(myHashTable.get('apples'))
// // myHashTable.set('apples', 9)
// // myHashTable.get('apples')

// const array = [1, [2, [2, [4]]], [3]]

// function onlyOneArray(array2) {
//     let auxArray = []
//     for (let arr of array2) {
//         let conditionRecursive = arr.length ? onlyOneArray(arr) : arr
//         auxArray = [].concat(auxArray, conditionRecursive)
//     }
//     return auxArray
// }

// console.log(onlyOneArray(array))
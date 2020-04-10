function mergeSortArrays1(arr1, arr2) {
    const arrMerged = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 1
    let j = 1

    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1

    while (arr1Item || arr2Item) {
        if (arr2Item === undefined || arr1Item < arr2Item) {
            arrMerged.push(arr1Item)
            arr1Item = arr1[i]
            i++
        } else {
            arrMerged.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
    }

    return arrMerged

}

function mergeSortArrays2(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b)
}


console.log(mergeSortArrays2([0, 3, 12], [4, 1]))
console.log(mergeSortArrays1([0, 3, 12], [4, 1]))


const dog = { name: 'Dalila' }
function AboutYou(age) {
    console.log(`My name is ${this.name}, i have ${age} years old`)
}
// sayHello.call(dog, 12)
const bindD = sayHello.bind(dog, 12)

bindD()


let number = 0
console.log(number++)
console.log(++number)
console.log(number)



const foo = (function outer() {
    let count = 0;
    return function inner() {
        return count++;
    }
})()

console.log(foo()) //
console.log(foo()) //

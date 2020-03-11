var i
const arr = ['a', 'b', 'c', 'd']
console.log(i)
for (var i= 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log(i, arr[i])
    }, 0)
}

console.log('saida', i)

// const sumandsub = function () {
//     let num = 10
    
//     function increment(){
//         console.log(this.num)
//     }

//     return increment
// }

// sumandsub()()

// obj.decrement()?
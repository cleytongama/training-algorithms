// let numbers = [1, 5, 2, 3, 4, 5, 5, 4, 6, 4,5, 5]
// let array = []
// let count = 0

// numbers.forEach((item) => {
//     array.push({
//             elemento: item,
//             count:  numbers.filter(element => element === item).length
//     })
// });

// console.log(array)

// let numberDistinct = numbers.filter((item, index) =>
//     numbers.indexOf(item) !== index
// ).sort((a, b) => a - b).filter(value => value == 5).length


// console.log(numberDistinct)
var arr = ['a', 'b', 'c', 'd', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a', 'k'];
var map = arr.reduce(function (prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
}, {});

// // map is an associative array mapping the elements to their frequency:
console.log(JSON.stringify(map));


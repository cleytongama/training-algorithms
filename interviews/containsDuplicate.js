const arr = [1, 1, 2]
function containsDuplicate(nums) {
    return nums.some((value, index, array) => {
        return array.indexOf(value) !== index
    })
}

console.log(containsDuplicate(arr))
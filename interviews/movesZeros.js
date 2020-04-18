const nums = [1, 0, 0]

var moveZeroes = function (nums) {
    const arrZeros = []
    const arrOuthers = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            arrOuthers.unshift(nums[i])
            continue;
        }
        arrZeros.push(nums[i])
    }
    return [].concat(arrOuthers.reverse(), arrZeros)
};

const moveZeroes2 = function (nums) {
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
    }
    return nums
};
console.log(moveZeroes2(nums))
console.log(moveZeroes(nums))
function pairSumNumberIndex(nums, target_num) {
    const map = [];
    let values = [];

    nums.forEach((element, index) => {
        if (map[nums[index]] !== undefined) {
            values[0] = { index: map[nums[index]], value: nums[map[nums[index]]] }
            values[1] = { index: index, value: nums[index] }

        } else {
            map[target_num - nums[index]] = index
        }
    });
    return values
}
function hasPairWithSum(nums, target_num) {
    const mapValues = {};
    let values = [];

    for (index in nums) {
        if (nums[index] in mapValues) {
            values[0] = nums[mapValues[nums[index]]]
            values[1] = nums[index]
        } else {
            mapValues[target_num - nums[index]] = index
        }
    }

    // nums.forEach((element, index) => {
    //     if (element in mapValues) {
    //         values[0] = nums[mapValues[element]]
    //         values[1] = element
    //     } else {
    //         mapValues[target_num - nums[index]] = index
    //     }
    // });
    return values
}

console.log(pairSumNumberIndex([1, 2, 2], 4));
console.log(hasPairWithSum([1, 2, 3, 4, 5, 6, 8], 7));
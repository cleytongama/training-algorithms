const rotate = function (nums, k) {

    if (nums.length === 1 || k === 0) {
        return nums;
    }
    while (k > 0) {
        nums.unshift(nums.pop());
        k--;
    }
    return nums;
};

console.log(rotate([1, 2, 3, 4], 3))
// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const array = [-1, 2, 3, -5, 4]

function kadane(N) {
    let max_current = 0
    let max_total = -1

    for (let i = 0; i < N.length; i++) {
        max_current = max_current + N[i]
        if (max_current < 0) {
            max_current = 0
        }
        max_total = Math.max(max_current, max_total)
    }

    return max_total
}

let maxSubArray = function (nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];


    for (let i = 1; i < nums.length; i++) {
        maxCurrent = nums[i] > (maxCurrent + nums[i]) ? nums[i] : (maxCurrent + nums[i]);

        maxGlobal = maxGlobal > maxCurrent ? maxGlobal : maxCurrent

        // maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        // maxGlobal = Math.max(maxGlobal, maxCurrent);
    }

    return maxGlobal;
};

console.log(maxSubArray(array))
console.log(kadane(array))
// console.log(Math.max(...array));
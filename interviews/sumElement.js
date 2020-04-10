var twoSum = function (nums, target) {
    const mapElements = {};
    const arrReturn = [];

    nums.forEach((element, index) => {
        if (element in mapElements) {
            arrReturn[0] = mapElements[element]
            arrReturn[1] = index
        } else {
            mapElements[target - element] = index

        }
    })
    return arrReturn
};

// const result = twoSum([2, 7, 11, 15], 18)
// console.log(result)


function findIndexNumber(nums, number) {
    nums.forEach((element, index) => {
        if (number === element) {
            return index
        }
    })
};

// usando for 

const twoSum2 = function (nums, target) {
    const mapElements = {};
    for (let i = 0; i < nums.length; i++) {
        if (mapElements[nums[i]] >= 0) {
            return [mapElements[nums[i]], i]
        }
        mapElements[target - nums[i]] = i
    }

    console.log(mapElements)
};

console.log("a", twoSum2([2, 7, 11, 15], 7))

// const index = findIndexNumber([2, 7, 11, 15], 7)

// console.log(index)
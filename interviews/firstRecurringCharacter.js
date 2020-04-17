
const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4]
const arr2 = [1, 2, 3, 4, 5]

function firstrRecurringCharacter(N) {
    const valueCurrent = {}
    if (N.length === 1) {
        return undefined
    }
    for (let value of N) {
        if (value in valueCurrent[value]) {
            return value
        } else {
            valueCurrent[value] = value
        }
    }

    return undefined
}

console.log(firstrRecurringCharacter(arr2))
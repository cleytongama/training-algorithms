function reverseS(input) {

    const length = input.length
    const reverse = []
    const source = [...input]
    for (let i = length - 1, desIndex = 0; i >= 0; i-- , desIndex++) {
        reverse[desIndex] = source[i]
    }
    return reverse.join("")
}

console.log(reverseS("cleyton"))
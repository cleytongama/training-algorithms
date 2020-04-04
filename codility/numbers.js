function solution(N) {
    let count = 0
    let countNumberOne = 0

    while (count <= N) {
        let array = `${count}`.split('').filter((num) => num === '1');
        if (array) {
            countNumberOne += array.length
        }
        count++
    }
    return countNumberOne
}

console.log(solution(13))

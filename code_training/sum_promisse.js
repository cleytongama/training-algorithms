function sum(numbers) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const arrayNumbers = [...numbers]
            const sumNumbers = arrayNumbers.reduce((acc, current) => acc + current)
            return resolve(sumNumbers)
        }, 1000)
    })
}

(async function () {

    const functions = [sum([2, 2]), sum([4, 4])];
    let results = [];

    for (fn of functions) {
        let done = await fn
        results = [...results, done]
    }

    const total = await sum(results)

})()

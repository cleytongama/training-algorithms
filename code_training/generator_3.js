function createInterable(...array) {
    return {
        *[Symbol.iterator]() {
            let i = 0;
            while (i < array.length) {
                yield array[i++]
            }
        }
    }
}

const languagens = createInterable("java", "javascript", "Lisp")

for (let language of languagens) {
    console.log(language)
}

const promise1 = (name) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name)
        }, 1000)
    })
}
const promise2 = (name) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name)
        }, 500)
    })
}

const compose = (...fns) => (...args) => {
    return Promise.all(fns.map(fn => fn(...args)))
}

const funcCompose = compose(promise1, promise2)

const run = async () => {
    const result = await funcCompose("cleyton gama")
    console.log(result)
}

run()
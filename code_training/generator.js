let middlewares = []

const promises = (...middleware) => {
    middlewares = [...middlewares, ...middleware]
    return middlewares;
}

const promise1 = () => new Promise(resolve => {
    setTimeout(() => resolve('promisse1'), 1000)
})

const promise2 = () => new Promise(resolve => {
    setTimeout(() => resolve('promisse2'), 1000)
})

promises(promise1, promise2)


function* generator() {
    for (let middleware of middlewares) {
        yield middleware()
    }
}

function co(gen) {
    const g = gen()
    const run = (val) => {
        const next = g.next(val)
        if (!next.done) {
            next.value.then((v) => {
                run(v)
            })
        }
    }
    run(null)
}

function get() {
    co(generator)
}
get()


const sum = (p1, p2) => p1 + p2;
const multi = (p1, p2) => p1 * p2;

const compose = (...fns) => (...args) => fns.reduce((acc, fn) => {
    acc[fn.name] = fn(...args)
    return acc
}, {})

const funcs = compose(sum, multi)

const result = funcs(1, 2)

console.log(result)
const run = (cb) => cb(new Error("ocorreu algum problema"), "Cleyton Gama")

const cb = (err, data) => {
    if (err) throw err

    return data
}
console.log(run(cb))
const App = () => {

    let middlewares = []

    const use = (fn) => {
        middlewares = [...middlewares, fn];
        return middlewares;
    }

    const runMiddlewares = index => {
        const countMiddleware = middlewares.length
        if (index < countMiddleware) {
            middlewares[index].call(null, () => runMiddlewares(index + 1))
        }
    }
    const get = () => {
        runMiddlewares(0)
        console.log("get")
    }

    return {
        get,
        use
    }
}

const app = App()

app.use((next) => {
    console.log('primeiro ')
    next()
})
app.use((next) => {
    console.log('segundo')
    next()
})
app.use((next) => {
    console.log('terceiro')
    next()
})
app.get()
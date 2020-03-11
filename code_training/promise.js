new Promise((resolve) => {
    resolve("2")
    Promise.resolve().then(() => console.log("3"))
}).then((t) => console.log(t))

setTimeout(() => {
    console.log("1")
}, 0)

console.log("4")
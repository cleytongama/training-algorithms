function fn3() {
    new Promise((resolve, reject) => {
        console.log("micro task")
        resolve(true)
    })

    setTimeout(() => {
        console.log("macro task")
    }, 0)
}
function fn2() {
    fn3()
}
function fn1() {
    fn2()
}
function main() {
    fn3()
}

main()
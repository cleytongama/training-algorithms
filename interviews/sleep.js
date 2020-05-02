

const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, time)
})

sleep()
console.log("teste")
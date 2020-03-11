function sum(a, b) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(a + b)
        }, 1000)

    })
}

// function async(fn) {
//     const gen = fn();
//     asyncR(gen)
// }

// function asyncR(gen, result) {
//     const obj = gen.next(result)
//     if (obj.done) return;

//     obj.value.then(function (result) {
//         asyncR(gen, result)
//     })
// }

// async(function* () {
//     const a = yield sum(1, 2);
//     const b = yield sum(2, 3);
//     console.log(a, b)
// })


(async function () {
    const a = await sum(1, 2)
    console.log(a)
})();
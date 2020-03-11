const arr = ["a", "b", "c", "d"]

for (var i = 0; i < arr.length; i++) {

    setTimeout(() => {
        console.log(i, arr[i])
    }, 0)
}

console.log("saida", i)

function degraus(N) {
    let deg = [];
    for (let i = 0; i < N; i++) {
        if (i === 0 || i === 1 || i === 2) {
            deg.push(i === 0 ? 1 : i)
            continue
        }

        deg.push(deg[i - 2] + deg[i - 1])
    }

    return deg
}

function starts(n) {
    let n1 = 1
    let n2 = 2
    let aux = 0

    if (n === 1 || n === 2) {
        return n
    }

    for (let i = 2; i < n; i++) {
        aux = n1 + n2
        n1 = n2
        n2 = aux
    }

    return n2
}
console.log("1", starts(1))
console.log("2", starts(2))
console.log("3", starts(3))
console.log("4", starts(4))
console.log("5", starts(5))

console.log(degraus(7))

// 1 1 2 3 5 8 13 
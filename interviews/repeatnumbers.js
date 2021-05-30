function repeat(N) {
    let aux = N - (N - 1);
    while (aux <= N) {
        let aux2 = aux
        while (aux2 > 1) {
            console.log(aux)
            aux2--
        }
        console.log(aux)
        aux++
    }
}
function repeatRecursive(N) {
    if (N === 1) {
        return N;
    }
    return repeatRecursive(N - 1)
}

console.log(repeatRecursive(5))
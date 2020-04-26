function arithmeticExpression(a, b, c) {

    const options = ['-', '+', '*', '/']

    const operation = (a, b, op) => eval(`${a} ${op} ${b}`);

    const arithmetics = options.map((op) => {
        return operation(a, b, op)
    })

    return arithmetics.some((value) => value === c)
}

console.log(arithmeticExpression(8, 3, 5))
function* forever() {
    let value = 1
    while (true) {
        yield value++;
    }
}

function today() {
    const date = new Date()
    console.log(date)
}

const generateFunc = forever()
console.log(generateFunc.next());
generateFunc.next();
generateFunc.next();
today()
generateFunc.throw("error");
generateFunc.next();
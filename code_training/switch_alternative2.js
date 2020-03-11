const methods1 = (method) => {
    switch (method) {
        case 'a':
            return () => console.log("MethodmA")

        case 'a':
            return () => console.log("MethodmA")

        case 'a':
            return () => console.log("MethodmA")

        case 'a':
            return () => console.log("MethodmA")
        default:
            return () => "Não existe esse comando"
    }
}

const methods = (method) => {
    const obj = {
        a: () => console.log("Method A"),
        b: () => console.log("Method B"),
        c: () => console.log("Method C")
    }
    return obj[method] || "Não existe esse comando"
}


const m = methods("a");
const m1 = methods1("a");
console.log(m())
console.log(m())

async function soma() {

}


async function main() {
    console.log(soma())
    const result = await soma()
    return result
}

main().then((result) => console.log(result))
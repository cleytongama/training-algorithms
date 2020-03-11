const start = new Date()

function print(x) {

    console.log(x)

    console.log("Date", Date.now() - start)

    print(x + 1)
}

print(1)
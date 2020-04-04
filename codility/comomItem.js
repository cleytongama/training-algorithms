function commonArray(X, Y) {
    let check = false;
    let allArray = X.concat(Y)

    const result = allArray.filter((element, index, array) => {
        return index !== array.indexOf(element)
    })

    return result.length ? !check : check
}


console.log(commonArray([1, 2, 3, 4], [6, 5]))
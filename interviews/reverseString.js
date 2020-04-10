
function strRevert(str) {

    const strArray = [...str]
    const strReverse = []
    for (let i = strArray.length - 1; i >= 0; i--) {
        strReverse.push(strArray[i])
    }
    return strReverse.join('')
}

function strRevert2(str) {
    return [...str].reverse().join('')
}

console.log(strRevert2("cleyton"))
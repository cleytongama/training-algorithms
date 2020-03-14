const vetor = [3, 8, 9, 7, 6]

const k = 3


// function cyclycRotation(vetor, k) {

//     let lastIndex = vetor.length - 1;
//     let vetorX = []
//     let aux = 0

//     if(vetor.length === k || k === 0){
//         return vetor
//     }

//     for (let rotateIndex = 0; rotateIndex < k; rotateIndex++) {
//         if (vetorX.length === vetor.length) {
//             vetor = vetorX
//             vetorX = []
//         }
//         for (let index = 0; index <= lastIndex; index++) {
//             if (index === 0) {
//                 aux = vetor[index]
//                 vetorX[index] = vetor[lastIndex]
//             } else {
//                 vetorX[index] = aux
//                 aux = vetor[index]
//             }
//         }
//     }

//     return vetorX

// }

function solution(A, K) {
    if (A.length === K || K === 0) {
        return A
    }

    const rotations = Array(K);
    for(rotation of rotations){
        let lastElement = A[A.length - 1]
        A.unshift(lastElement)
        A.pop()
    }

    return A
}

// console.log(cyclycRotation(vetor, k))
// console.log(cyRotation(vetor, k))
console.log(cyRotation(vetor, 3))

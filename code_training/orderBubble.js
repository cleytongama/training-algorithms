const vetor = [9,4,5, 10]
let temp = 0;

for(let i = 0 ; i < vetor.length ; i++){
	for(let j = i+1 ; j < vetor.length; j++){
		if(vetor[j] > vetor[i] ){
			temp = vetor[i]
			vetor[i] = vetor[j]
			vetor[j] = temp
		}			
	}
}

console.log(vetor)

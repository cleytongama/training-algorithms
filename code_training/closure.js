// const func1 = (name) => {

// 	const teste = () => {
// 		return name
// 	}

// 	return teste
// }

const obj = {
	id: 42,
	counter1: () => {
		setTimeout(() => {
			console.log(--this.id);
		}, 1);
	},
	counter2: function () {
		setTimeout(() => {
			console.log(this.id++);
		}, 0);
	}
};
console.log(obj.counter1())
console.log(obj.counter2())



// const obj = {
// 	id: 42,
// 	counter: function counter() {
// 		setTimeout(() => {
// 			console.log(this.id);
// 		}, 1000);
// 	}
// };

// console.log(obj.counter1())
// console.log(obj.counter2())


// // teste.apply(name)
// const teste = func1('Cleyton Gama')

// console.log(teste())

// const contador = (num) => {
// 	let atual = 0
// 	let timer = setInterval(() => {
// 		console.log(atual++)
// 		if (atual === num) {
// 			clearInterval(timer)
// 		}
// 	}, 1000)
// }

// contador(10)
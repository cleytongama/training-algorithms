const pessoa = {

	name: ()=> console.log('this')
	
}

console.log(pessoa.name())

function fn1() {
	let v1 = 1
	// console.log(this)	
	return {
		m1() {
			console.log(++v1)
		},
		m2: () => {
			console.log(--v1)
		}
	}

}
const obj1 = fn1()
obj1.m1()
obj1.m2()
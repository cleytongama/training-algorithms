// function solution(N) {

// 	const number = Number(N).toString(2);
// 	const positionOne = []
// 	const numberIntervalZero = []

// 	for (let i = 0; i < number.length; i++) {
// 		if (number[i] === '1') {
// 			positionOne.push(i)
// 		}
// 	}

// 	const orderPositionOne = positionOne.sort(function (a, b) {
// 		return (a - b);
// 	});

// 	for (let j = 0; j < orderPositionOne.length; j++) {
// 		if (orderPositionOne[j + 1]) {
// 			numberIntervalZero.push(orderPositionOne[j + 1] - orderPositionOne[j] - 1)
// 		}
// 	}

// 	const orderNumberIntervalZero = numberIntervalZero.sort(function (a, b) {
// 		return (a - b);
// 	});


// 	const maxGap =  numberIntervalZero[orderNumberIntervalZero.length -1]
// 	return maxGap;
// }


function solution(N) {

	// const array = ['0000', '00', '000', '0', '0']

	// var total = [1, 2, 3, 4, 5, 6, 7, 8]
	// 	.reduce(function (acc, curr) {
	// 		console.log(acc, "acc")
	// 		console.log(curr, "curr")
	// 		return acc + curr;
	// 	}, 0);

	// // var sum = function(previous, current) {
	// // 	console.log("previous", previous.length)
	// // 	console.log("current",current.length)
	// // 	return previous.length > current.length ? previous : current

	// // };
	// // const teste = array.reduce(sum, '')
	// // console.log(teste)
	const binN = (N >>> 0).toString(2);
	console.log(binN)
	const untrailed = binN.slice(0, binN.lastIndexOf(1) + 1);
	console.log("untrailed",untrailed)
	// console.log(untrailed.split(1))
	// console.log(untrailed.split(1).filter(x => x.indexOf('0') > -1))
	return console.log(untrailed.split(1)
	           .filter(x => x.indexOf('0') > -1)
	           .reduce((val, acc) => val.length > acc.length ? val : acc, '')
	           .length);
}

solution(5);

// let nums = ['1','3']
// console.log(nums.indexOf('3'))
// console.log(nums.indexOf(1))
// let nums = ['1', '2', '3', '5', '3']

// nums = nums.filter((item, index, array) => array.indexOf(3) > -1)
// nums = nums.filter((item, index, array) => console.log(array.indexOf(item)) )

// console.log(nums)
// nums = nums.filter((elem, index, array) => console.log(array.indexOf(elem)) )

// console.log(nums)
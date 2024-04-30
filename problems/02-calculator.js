
class Calculator {
	constructor(total) {
		this.total = 0;
		// total = 0;
	}

	// INSTANCE methods

	add(num) {
		//add the num arg to the total
		return this.total += num;
	}

	subtract(num) {
		// subtract the num arg from the total
		return this.total -= num;
	}

	divide(num) {
		// divide the total by the num arg
		return this.total /= num;
	}

	multiply(num) {
		// multiply the total by the num arg
		return this.total *= num;
	}
}

let calculator = new Calculator();
console.log(calculator.add(50));      // => 50
console.log(calculator.subtract(35)); // => 15
console.log(calculator.multiply(10)); // => 150
console.log(calculator.divide(5));    // => 30
console.log(calculator.total)         // => 30


















/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}

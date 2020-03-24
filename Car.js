class Car {
	constructor(color, convertible = false) {
		this.color = color
		this.convertible = convertible
	}

	accelerate(numA) {
		// const currentSpeed = // add the number to current speed
		// print the new speed

	}

	decelerate(numD) {
		// subtract the number (argument) from the current speed
		// print the new speed
		// do not let it go negative
	}

	brake() {
		// reduce speed to 0
	}
}

// const porsche = new Car('red', true)
// console.log(porsche);

module.exports = Car
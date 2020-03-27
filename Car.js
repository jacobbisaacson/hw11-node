class Car {
	constructor(color, convertible = false) {
		this.color = color
		this.convertible = convertible
		this.speed = 0
	}

	accelerate(num) {
		this.speed += num // add the number to current speed
		// print the new speed
		console.log(`you're speeding up! you're going ${this.speed}`);
		console.log(this.speed);

	}

	decelerate(num) {
		if(num > this.speed) {
			console.log("youre going so slow you're stopped!");
			this.speed = 0
			console.log(this.speed);
		} else {
			this.speed -= num
			console.log(this.speed);
			console.log(`youre going slow, your speed is ${this.speed}`);
		}
	
		// print the new speed
		// do not let it go negative
	}

	brake() {
		this.speed = 0
		console.log(`you're stopped, your speed is ${this.speed}`);
		console.log(this.speed);

		// reduce speed to 0
	}

}

module.exports = Car
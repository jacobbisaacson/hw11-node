const car = require('./car.js')
console.log(car); // says [function: car]

const porsche = new car('red', true)
console.log(porsche);

porsche.accelerate(60)
porsche.brake(0)
porsche.accelerate(20)
console.log(porsche);
console.log("\nthis is showing accelerate");
porsche.decelerate(10)
porsche.decelerate(50)

// porsche.speed = 0
// console.log(porsche);

// porsche.accelerate(5)
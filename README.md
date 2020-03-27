![General Assembly](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)
# Homework: Node Modules

**Warning: you must follow instructions to the letter to receive credit for this assignment.**  

## Your task

Make a module (`Car.js`) that defines a car `class` with both properties and methods as described below, and exports it as a module.
 
Then **make an `app.js` or `index.js` file that imports (requires) that module and instantiates your car class and calls its methods.  Console.log stuff to make sure it works**

Specs for the `Car` class:

Users should be able to define the following properties of a `new` car:
- color
- convertible (boolean)

`new` `Car`s should automatically come with the following property:
- speed (0, at first)

Methods:
- required: include `accelerate()` and `decelerate()`
  - these should take one argument, a number, and add or substract it the from the current speed
  - the functions should also print the new adjusted speed
  - the car should not be able to have a negative speed
- required: `brake()`
  - this should reduce the speed to zero

That is all the required functionality, but you can add anything else you like, as long as you include what's required.

**You must have code/console.logs demonstrating use of the module in the `app.js` or `index.js` file or the assignment will not be considered complete.**

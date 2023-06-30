// day 3 & 4
/*
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data fetched from an API";
      if (data) {
        resolve(data); // Promise is fulfilled
      } else {
        reject("Error occurred"); // Promise is rejected
      }
    }, 2000);
  });
}

async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchDataAsync(); */
/* Day-5 */
/*
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const evenNunbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNunbers);
const mutiNumbers = evenNunbers.map((number) => number * 2);
console.log(mutiNumbers);
const sum = mutiNumbers.reduce(
  (accumulator, number) => number + accumulator,
  0
);
console.log(sum); */

//day 6
/*
function createCounter() {
  let counter = 0;
  function innerFunction() {
    counter++;
    console.log(counter);
  }
  return innerFunction;
}
const number = createCounter();
number();
number();
number(); */

//day 7
/*
//Annynomous Function
setTimeout(function () {
  console.log("Hello World");
}, 1000);
setTimeout(function () {
  console.log("Hello World");
}, 1000);

// Named function
const multiply = function multiplynumbers(a, b) {
  return a * b;
};

console.log(multiply(3, 5));

//First-class Function

function sayHello() {
  console.log("Hello World");
}
let greet = sayHello;

function executeFunction(func) {
  func();
}

executeFunction(greet);
*/
//Day-8 in test2106.html
//day-9
/*
console.log("Start");

Promise.resolve().then(() => console.log("Microstac 1"));

setTimeout(function () {
  console.log("Callback 1");
}, 2000);

Promise.resolve().then(() => console.log("Microstac 2"));
setTimeout(function () {
  console.log("Callback 2");
}, 3000);

console.log("End"); */

//day-10
/*
console.log("Higher Order function");

function greet(name) {
  return `Hello ${name}`;
}
function decorateGreeting(greetingFunction) {
  return function (name) {
    const greeting = greetingFunction(name);
    return `****${greeting}****`;
  };
}

const decorateGreet = decorateGreeting(greet);
console.log(decorateGreet("Lina"));

function multiplayer(factor) {
  return function (number) {
    return factor * number;
  };
}

var double = multiplayer(2);
var triple = multiplayer(3);

console.log(`Multiplication: ${double(5)}`);
console.log(triple(9));

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var num1 = add(15);
var num2 = num1(68);
console.log(`Adding of three number: ${num2(67)}`); */

//day 11
/*
const age = 10;
const isAdult = age >= 18 ? "adult" : "Minor";
console.log(isAdult);

const a = -10;
const isA = a >= 0 ? "Positive" : "Negative";
console.log(`Number A is: ${isA}`);

function sum(...numbers) {
  let total = 0;
  for (let number in numbers) {
    total = total + number;
  }
  return total;
}
const totalSum = sum(23, 45, 67);
console.log(totalSum);

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

const number = [34, 56, 67, 23, 66];
console.log(...number);
const sum1 = (a, b, c, d) => a + b + c + d;
console.log(sum1(...number));

const array1 = [34, 56, 34];
const array2 = [3, 2, 7, 8, ...array1];

const margeArray = [...array1, ...array2];
console.log(margeArray);

function greet(name, age) {
  console.log(`Hi! ${name}, you are ${age} years old`);
}
const person = ["Lina", 39];
greet(...person); */

//day 12
/*
const person = {
  name: "Lina",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

person.greet();

const person2 = {
  name: "Aarish",
};

person.greet.call(person2);

function greet(greeting, name) {
  console.log(`${greeting}, ${name}`);
}

greet("hi", "Lina");
greet.apply(null, ["hi", "Aarish"]);

const greet1 = person.greet.bind(person2);
greet1();
*/

//day-13
/*
const user = {
  name: "Lina",
  address: {
    street: "14K",
    city: "Bergen",
    //country: "Norway",
  },
};

const country = user.address?.country;
console.log(country);

const zipCode = user.address?.zipCode ?? "N/A";
console.log(zipCode);

const city = user.address ?? user.address.city;
console.log(city);

const name = null;
const defaultName = "Lina";

const finalName = name ?? defaultName;

console.log(finalName);

const quantity = 0;
const defaultQuantity = 10;

//const finalQuantity = quantity ?? defaultQuantity;
const finalQuantity = quantity || defaultQuantity;

console.log(finalQuantity);

const value1 = true;
//const value1 = false;

const value2 = "Hello";

const result = value1 && value2;
//const result = value1 || value2;
console.log(result);

const isLoggedIn = true;

isLoggedIn && console.log("you are logged In"); */

//day-14
/****  Constructor* */
/*class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Lina", 39);
console.log(person.name);
console.log(person.age);

function Person1(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person1("Raaid", 10);
console.log(person1.name);
console.log(person1.age); */
/*
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getAge() {
    return this._age;
  }

  setAge(age) {
    if (age >= 0) {
      this._age = age;
    }
  }
}

const person = new Person("Lina", 40);
//person.setName("Aarish");
console.log(person.getName());
console.log(person.getAge());
person.setName("Aarish");
person.setAge(7);
console.log(person.getName());
console.log(person.getAge());

function createCounter(count) {
  return {
    increament() {
      count++;
    },
    decreament() {
      count--;
    },
    getCount() {
      return count;
    },
  };
}

const counter = new createCounter(45);
counter.increament();
counter.increament();
counter.decreament();
console.log(counter.getCount()); */

//day-15
/*
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, My name is ${this.name} and I am ${this.age} years old`);
};

const person1 = new Person("Lina", 39);
const person2 = new Person("Aarish", 7);
console.log(person1.name);
person1.greet();
person2.greet();
person1.toString();

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log(`Hello, My name is ${this.name}`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  console.log("Woof!");
};

var myDOg = new Dog("Max", "Labrador");

myDOg.sayHello();
myDOg.bark(); */
/*
const animal = {
  init(name) {
    this.name = name;
  },
  sayHello() {
    console.log(`Hi, My name is ${this.name}`);
  },
};

const Dog = Object.create(animal);
Dog.bark = function () {
  console.log("Woaf!");
};

const myDog = Object.create(Dog);
myDog.init("max");
myDog.sayHello();
myDog.bark(); */

//day-16
/*
class Shape {
  calculateArea() {
    console.log("Calculating area of Generic Shape");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    console.log(`Calculating area of circle with radius: ${this.radius}`);
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    console.log(
      `Calculating area of rectangle with length: ${this.length} and width: ${this.width}`
    );
    return this.length * this.width;
  }
}

const shape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(45, 38);
shape.calculateArea();
console.log(circle.calculateArea());
console.log(rectangle.calculateArea());

class Calculator {
  add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
  }
}

const calculator = new Calculator();
console.log(calculator.add(3, 5));
console.log(calculator.add("Hello", "Lina"));

class Animal {
  makeSound() {
    console.log("Generic Animal Sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woaf!");
  }
}

const animal = new Animal();
const dog = new Dog();

animal.makeSound();
dog.makeSound();

const animalProxy = new Proxy(animal, {
  get(target, prop) {
    if (prop === "makeSound") {
      return () => {
        console.log("Custom Sound");
      };
    }
    return target[prop];
  },
});

animalProxy.makeSound();

function Vehicle(type) {
  if (this instanceof Vehicle) {
    this.type = type;
  } else {
    return new Vehicle(type);
  }
}

const car = new Vehicle("car");
const bike = Vehicle("car");
console.log(car.type);
console.log(bike.type); */

//day-17

//FibonacciGenerator Function declaration

function* fibonacciGenerator() {
  let [prev, curr] = [0, 1];

  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

//create a fibonacci Number generator

const fibonacci = fibonacciGenerator();

// Generate the 1st 10 number

for (let i = 0; i <= 10; i++) {
  console.log(fibonacci.next().value);
}

function* numberGenerator() {
  let i = 0;
  while (i < 10) {
    yield i;
    i++;
  }
}

// Creating an instance of the generator
var generator = numberGenerator();

// Iterating over the generated values
for (let i = 0; i < 5; i++) {
  console.log(generator.next().value);
}
// Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
console.log(generator.next().value); // Output: undefined

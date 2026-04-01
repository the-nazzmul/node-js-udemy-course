//Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(anotherBalance.valueOf());
// console.log(typeof anotherBalance);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

//null and undefined

let firstName = null;
let lastName = undefined;

// console.log(firstName);
// console.log(lastName);

// String

let myString = "hello";
let myStringOne = "Hola";
let userName = "nazmul";

let greetMessage = `Hello ${userName}!`;
let demoOne = `Value is ${2 * 2}`;

// console.log(demoOne);
// console.log(greetMessage);

let sm1 = Symbol("nazmul");
let sm2 = Symbol("nazmul");

console.log(sm1 == sm2);

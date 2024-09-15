/*
Primitive
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

Non-Primitive
Array, Object, Function.
*/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 123222222222222n;

const heros = ["Spiderman", "Superman", "Batman"];
const Tanishq = {
    name : "Tanishq Thakur",
    age : 23
}

const myFunction = function(){
    console.log('Hello World');
}

console.log(typeof outsideTemp);
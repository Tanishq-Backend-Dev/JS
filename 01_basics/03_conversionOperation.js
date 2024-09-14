let score = "33abc";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);  //NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Tanishq" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);

// ******************************* Operations ****************************************//

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Hello";
let str2 = " Tanishq";
let str3 = str1+str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);  // => 122
console.log(1 + 2 + "2");  // => 32

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

let gameCounter1 = 200;
++gameCounter1;
console.log(gameCounter1);
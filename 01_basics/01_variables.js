const accountId = 144553;                 //Immutable
let accountEmail = `prince123@gmail.com`; //Mutable
var accountPassword = `prince@123`;       //Mutable
accountCity = `Jaipur`;
let accountState;

// accountId = 2;  #Not allowed
accountEmail = `tanishq123@gmail.com`;
accountPassword = `tanishq@123`;
accountCity = `Mumbai`;

console.log(accountId);

/* 
Note:- Prefer not to use 'var', because of issue in block scope and functional scope.
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
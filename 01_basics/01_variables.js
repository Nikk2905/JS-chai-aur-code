const accountId = 12905
let accountEmail = "nikhil@gmail.com"
var accountPassword = "12345678"
accountCity = "bihar"
let accountState;
// accountId = 23412 //  not allowed

accountEmail = "nik@gmail.com"
accountPassword = "123213"
accountCity = "goa"

console.log(accountId);

/*
prefer not to use "var"
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
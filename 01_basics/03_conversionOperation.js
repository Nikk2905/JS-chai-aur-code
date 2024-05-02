let score = "233abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

console.log(valueInNumber);   // "12as -> NaN(not a number)"


//"12" => 33
//"33ab" => NaN
//true => 1; false => 0
//undefined => undefined
//Null => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false   (if empty string)
// "Nikhil" => true   (if anything in string)


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
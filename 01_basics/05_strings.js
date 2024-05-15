const name = "Nikhil"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String('Nikhiluwa  kr')

// console.log(gameName[1]);
// console.log(gameName[5]);
// console.log(gameName[6]);

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(7));
// console.log(gameName.indexOf('w'));

// const newString = gameName.substring(-1, 7)   //negative value does not effect.
// console.log(newString);

// const anotherString = gameName.slice(-7, 4)  //taking negative value its count from back/revese starting from -1.
// console.log(anotherString);

const newStringone = "    Nikhil     "
console.log(newStringone);
console.log(newStringone.trim());

const url = "http://nikhil.com/nikhil%20kumar"
console.log(url.replace('%20','+'));

console.log(url.includes('Sah')); // it checks weather string is present or not.

console.log(gameName.split('+'));
// const score = 400

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // to add decimal zeros.


// const otherNumber = 29.9884
// console.log(otherNumber.toFixed(2));
// console.log(otherNumber.toPrecision(1));


// const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));


//=++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(4.3));
// console.log(Math.ceil(5.3));
// console.log(Math.floor(3.9));
// console.log(Math.min(-3,2,5,6,77));
// console.log(Math.max(-3,3,5,4,22,11));

console.log(Math.random());  //gives random value between 0 and 1.
console.log(Math.random()*10 + 1);  // 1 is adding because sometimes it gives zero value.
console.log(Math.floor(Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min+1))+min);

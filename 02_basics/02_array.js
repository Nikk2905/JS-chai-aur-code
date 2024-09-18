const marvel_heros = ["thor","ironman","hulk"]
const dc_heros = ["flash","superman","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_newHeros = [...marvel_heros,...dc_heros]
//console.log(all_newHeros);

 const another_arr = [1,2,3,[4,5,6],7,[8,5,[6,9]]]

 const real_another_arr = another_arr.flat(Infinity)

 console.log(real_another_arr);
 

 console.log(Array.isArray("Nikhil"));
 console.log(Array.from("12345"));
 console.log(Array.from({name:"Nikhil"}));

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3));
 
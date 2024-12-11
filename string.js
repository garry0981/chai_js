
const name = "Gaurav"
const repoCount = 50

// console.log(`Hello my name is ${name} and repo count is ${repoCount}`);


const gameName = new String('Gaurav-ch-com')
// console.log(gameName[0]);

// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.length);

// console.log(gameName.indexOf('u'));
// console.log(gameName.charAt('2'));


const newString = gameName.substring(0,5)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "    Gaurav     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://Gaurav@gaurav%21chaudhary"
console.log(url.replace('%21','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

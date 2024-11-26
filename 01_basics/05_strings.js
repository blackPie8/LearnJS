const name  = "Ashray"
const count = 33

// console.log(`My name is ${name} and count is ${count}`);

const gameName = new String('ashray-as-com')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ashray    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashray.com/ashray%20stan"

console.log(url.replace('%20', '-'))

console.log(url.includes('ash'))

console.log(gameName.split('-'));
let score ="300"

// console.log(typeof(score))

console.log(2+2);
console.log(2>=2)

// datatype (primitive): string,number,boolen,undefind,null,symbol,bigint

// (non primitive):array,object,function

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id ===anotherId);

let outSideTem =null

console.log(typeof(outSideTem))


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (primitive) or HTMLTableCaptionElement(non primitive)

let myYouTubeName = "Gauravcahudhary"

let anotherName = myYouTubeName
 anotherName ="chaiAurCode"
console.log(anotherName);

let UserOne={
    email:"user@gmail.com",
    Upi:"user@ybl",
}
let userTwo = UserOne
userTwo.email ="Guarav@gmail.com"

console.log(UserOne.email);
console.log(userTwo.email);

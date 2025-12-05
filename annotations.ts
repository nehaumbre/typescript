//* ANNOTATIONS
//? Type annotations tell TypeScript the types of variables, parameters, and return values.
//? Type annotations are optional because TypeScript infers types automatically.

let name : string = "BOB"
let age : number = 20
let isAllergic : boolean = false

console.log(`hi i am ${name} my age is ${age} and me being allergic is ${isAllergic}`);

//assigning value
name = "TEAM"
age = 39
isAllergic = true

console.log(`hi i am ${name} my age is ${age} and me being allergic is ${isAllergic}`);

let profession = "Pilot"

// profession = 23  : gives error as profession is a string type
//* here we have not mentioned type like above but still we get error
//*this is called type inference: compiler assumesthe type automatically based on assigned value
//*above the value is string hence the type assumed is string
console.log(typeof profession);

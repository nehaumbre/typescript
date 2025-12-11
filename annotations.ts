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


// * Any type : represents any type (type checking is disabled) 
//*Useful when migrating JS → TS or dealing with unknown API data.
//!use the above sparingly as it makes it harder to catch type related errors
let color : any = "blue"
console.log("==============any type===============");
console.log(typeof color);
color = 22
console.log(typeof color);
color = true
console.log(typeof color);

//*  Function Parameter Annotations
//? specify the type of each parameter a function accepts.
//?  This helps TypeScript catch errors when calling the function with incorrect arguments.

function greet(name : string) {
    console.log(`Hello! ${name}`);
}

console.log( "==========Function Parameter Annotations");
greet('lev')
//! greet(0) gives error

//arrow fn

const add = (x:number,y:number) => x+y
let res = add(2,3)
console.log(res);

//* Default Params Values: set defaukt values to show in case of user not sending any params
function animeGreet(name: string = "User"){
    console.log("hello✨", name);
} 
console.log("Default Params Values==========");
animeGreet()
animeGreet("Lev")

//*Function Return Annotations
function double(x: number): number {
    return x*x;
}
let doubleRes = double(3)
console.log("Function Return Annotations======================");
console.log(doubleRes);

//arrow function

let addX = (x:number , y:number) : number =>  x+y
let addXres = addX(8,9)
console.log(addXres);

//*VOID :represents absence of a value.
//*  often used for functions that do not have return value

function message(msg : string) {
    console.log(`this is my ${msg}`);    
}

console.log("VOID example==============");
message("HELLO")
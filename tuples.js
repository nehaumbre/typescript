"use strict";
//A tuple is an array with fixed length 
// and fixed types in order.
Object.defineProperty(exports, "__esModule", { value: true });
//basic tuple
let user;
user = ["suo", 26]; //✔
//user = [26 , "suo"] //❌ wrong order
//Tuple with more values
let rgb;
rgb = [255, 0, 0]; //red
//Named Tuple (easy to read)
let product;
product = ["phone", 15000];
//🔹 Tuple inside a function
function getShow() {
    return ["Friends", 1994];
}
console.log(getShow());
//Array vs Tuple
let data = [
    ["A", 1],
    [1, "B"],
];
let arr = ["A", 1, 1, "B"]; //any order
let tup = ["A", 1]; //fixed order
console.log(`this is an array ${arr}`);
console.log(`this is a tuple ${tup}`);
console.log(data);
let data1 = ["A", 1, [1, "B"]];
console.log("Mixed array (NOT nested)", data1);
// use case of tuples
let status = [200, "OK"];
console.log(status);
status = [500, "Bad Request"];
console.log(status);
let person = ["giovani", 32];
const [name, age] = person;
console.log(name + " " + age);
const result = ["success", 200, true];
const [message, code, isScuccess] = result; //*Destructuring
console.log(`${message} ${code}`);
//# sourceMappingURL=tuples.js.map
//A tuple is an array with fixed length 
// and fixed types in order.

//basic tuple

let user : [string, number]

user = ["suo" ,26] //✔
//user = [26 , "suo"] //❌ wrong order

//Tuple with more values

let rgb : [number,number,number]

rgb = [255,0,0] //red

//Named Tuple (easy to read)

let product :[name: string , price : number]

product = ["phone" , 15000]

//🔹 Tuple inside a function

function getShow(): [string,number] {
    return ["Friends", 1994]
}
console.log(getShow()); 

//Array vs Tuple
let data: (string | number)[][] = [
  ["A", 1],
  [1, "B"],
];

let arr : (string | number)[] = ["A",1,1,"B"] //any order
let tup : [string, number] = ["A",1] //fixed order

console.log(`this is an array ${arr}`);
console.log(`this is a tuple ${tup}`);
console.log(data);

let data1: (string | number | (string | number)[])[] = ["A", 1, [1, "B"]];
console.log("Mixed array (NOT nested)", data1);


// use case of tuples
let status: [number, string] = [200, "OK"];

console.log(status);
status = [500, "Bad Request"]
console.log(status);

//destructuring in tuples
type candidate= [string, number]

let person : candidate =["giovani", 32]

const [name , age] = person

console.log(name +" "+ age)

const result : [string, number , boolean] = ["success", 200 , true]

const [message ,code , isScuccess] = result //*Destructuring

console.log(`${message} ${code}`);
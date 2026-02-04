"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//regular function
const printString = (x) => console.log(x);
const printNumber = (x) => console.log(x);
const printBool = (x) => console.log(x);
printString("this is a string in regular function");
printNumber(3);
printBool(true);
console.log("==============================");
//generic function
function printX(x) {
    return x;
}
//*T is a type variable:It means: whatever type goes in, the same type comes out.
const str = printX("This is a string in generic function");
const num = printX(1234);
const bool = printX(false);
//
// *TypeScript can infer the type
const inferStr = printX("abc"); // TypeScript infers T as string
const inferBool = printX(true); // TypeScript infers T as Boolean
console.log(`${str}
${num} 
${bool} ${inferStr} ${inferBool}`);
// Generics in TypeScript are how you write code
//  that works with types as data. It says :
//*“I don’t know who you are yet, but when you
// *arrive, I’ll treat you consistently.” 🧬
//or by definition
// Generics provide a way to make components work with any data type
// rather than a single one, while maintaining type safety.
// 🎀Example 2: Generic Array Function
function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
const numbers1 = [1, 2, 3, 4, 5, 6];
//const numbers2 = [] //TypeScript infers this as never[] (or any[] depending on config).
//Better practice is to be explicit:
const numbers2 = []; //*Now T is clearly number.
const mixed = [{ name: "John" }, { name: "Jane" }];
console.log("First Element:", getFirstElement(numbers1));
console.log("First Element:", getFirstElement(numbers2)); //undefined
console.log("First Element:", getFirstElement(mixed));
class NumberBox {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
class StringBox {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
const numBox = new NumberBox(42);
const strBox = new StringBox("Shoyo");
console.log("=======================");
console.log("Number Box value", numBox.getValue());
console.log("Number Box Value set", numBox.setValue(9));
console.log("Number Box value", numBox.getValue());
console.log("=======================");
console.log("String Box Value", strBox.getValue());
console.log("String Box Value set", strBox.setValue("Hinata Shoyo"));
console.log("String Box Value", strBox.getValue());
//Generic implementation
class GenericBox {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
const genericNumBox = new GenericBox(1000000);
const genericStrBox = new GenericBox("Kageyama");
console.log("Generic Number Box value", genericNumBox.getValue());
console.log("Generic Number Box Value set", genericNumBox.setValue(90000));
console.log("Generic Number Box value", genericNumBox.getValue());
console.log("=======================");
console.log("Generic String Box Value", genericStrBox.getValue());
console.log("Generic String Box Value set", genericStrBox.setValue("Kageyama Tobio"));
console.log("Generic String Box Value", genericStrBox.getValue());
// Random Key example
function getRandomKeyValuePair(obj) {
    const keys = Object.keys(obj);
    if (keys.length === 0) {
        throw new Error("Object has no keys");
    }
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return {
        key: randomKey,
        value: obj[randomKey],
    };
}
const StringObject = { a: "apple", b: "banana", c: "cheery" };
const RandomStringPair = getRandomKeyValuePair(StringObject);
console.log(RandomStringPair);
//---------------------------------------
function uniqueDataTypes(item, defaultvalue) {
    return [item, defaultvalue];
}
const dog1 = uniqueDataTypes({ name: "Spitz", breed: "Golden retriever" }, { name: "Noe", breed: "Husky" });
console.log(dog1);
//=----------------------------------
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNo = filterArray(numberArr, (num) => num % 2 === 0);
console.log(evenNo);
const oddNo = filterArray(numberArr, (num) => num % 2 != 0);
console.log(oddNo);
const fruitarray = [
    { name: "apple", color: "red" },
    { name: "orange", color: "orange" },
    { name: "banana", color: "yellow" },
    { name: "cherry", color: "red" },
];
const redFruits = filterArray(fruitarray, (fruit) => fruit.color === "red");
console.table(redFruits);
//# sourceMappingURL=generics.js.map
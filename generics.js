//regular function
var printString = function (x) { return console.log(x); };
var printNumber = function (x) { return console.log(x); };
var printBool = function (x) { return console.log(x); };
printString("this is a string in regular function");
printNumber(3);
printBool(true);
console.log("==============================");
//generic function
function printX(x) {
    return x;
}
//*T is a type variable:It means: whatever type goes in, the same type comes out.
var str = printX("This is a string in generic function");
var num = printX(1234);
var bool = printX(false);
//
// *TypeScript can infer the type
var inferStr = printX("abc"); // TypeScript infers T as string
var inferBool = printX(true); // TypeScript infers T as Boolean
console.log("".concat(str, "\n").concat(num, " \n").concat(bool, " ").concat(inferStr, " ").concat(inferBool));
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
var numbers1 = [1, 2, 3, 4, 5, 6];
//const numbers2 = [] //TypeScript infers this as never[] (or any[] depending on config).
//Better practice is to be explicit:
var numbers2 = []; //*Now T is clearly number.
var mixed = [{ name: "John" }, { name: "Jane" }];
console.log("First Element:", getFirstElement(numbers1));
console.log("First Element:", getFirstElement(numbers2)); //undefined
console.log("First Element:", getFirstElement(mixed));
var NumberBox = /** @class */ (function () {
    function NumberBox(value) {
        this.value = value;
    }
    NumberBox.prototype.getValue = function () {
        return this.value;
    };
    NumberBox.prototype.setValue = function (value) {
        this.value = value;
    };
    return NumberBox;
}());
var StringBox = /** @class */ (function () {
    function StringBox(value) {
        this.value = value;
    }
    StringBox.prototype.getValue = function () {
        return this.value;
    };
    StringBox.prototype.setValue = function (value) {
        this.value = value;
    };
    return StringBox;
}());
var numBox = new NumberBox(42);
var strBox = new StringBox("Shoyo");
console.log("=======================");
console.log("Number Box value", numBox.getValue());
console.log("Number Box Value set", numBox.setValue(9));
console.log("Number Box value", numBox.getValue());
console.log("=======================");
console.log("String Box Value", strBox.getValue());
console.log("String Box Value set", strBox.setValue("Hinata Shoyo"));
console.log("String Box Value", strBox.getValue());
//Generic implementation
var GenericBox = /** @class */ (function () {
    function GenericBox(value) {
        this.value = value;
    }
    GenericBox.prototype.getValue = function () {
        return this.value;
    };
    GenericBox.prototype.setValue = function (value) {
        this.value = value;
    };
    return GenericBox;
}());
var genericNumBox = new GenericBox(1000000);
var genericStrBox = new GenericBox("Kageyama");
console.log("Generic Number Box value", genericNumBox.getValue());
console.log("Generic Number Box Value set", genericNumBox.setValue(90000));
console.log("Generic Number Box value", genericNumBox.getValue());
console.log("=======================");
console.log("Generic String Box Value", genericStrBox.getValue());
console.log("Generic String Box Value set", genericStrBox.setValue("Kageyama Tobio"));
console.log("Generic String Box Value", genericStrBox.getValue());
// Random Key example
function getRandomKeyValuePair(obj) {
    var keys = Object.keys(obj);
    if (keys.length === 0) {
        throw new Error("Object has no keys");
    }
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    return {
        key: randomKey,
        value: obj[randomKey],
    };
}
var StringObject = { a: "apple", b: "banana", c: "cheery" };
var RandomStringPair = getRandomKeyValuePair(StringObject);
console.log(RandomStringPair);
//---------------------------------------
function uniqueDataTypes(item, defaultvalue) {
    return [item, defaultvalue];
}
var dog1 = uniqueDataTypes({ name: "Spitz", breed: "Golden retriever" }, { name: "Noe", breed: "Husky" });
console.log(dog1);
//=----------------------------------
function filterArray(array, condition) {
    return array.filter(function (item) { return condition(item); });
}
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNo = filterArray(numberArr, function (num) { return num % 2 === 0; });
console.log(evenNo);
var oddNo = filterArray(numberArr, function (num) { return num % 2 != 0; });
console.log(oddNo);
var fruitarray = [
    { name: "apple", color: "red" },
    { name: "orange", color: "orange" },
    { name: "banana", color: "yellow" },
    { name: "cherry", color: "red" },
];
var redFruits = filterArray(fruitarray, function (fruit) { return fruit.color === "red"; });
console.table(redFruits);

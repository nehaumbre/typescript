//regular function
const printString = (x: string) => console.log(x);
const printNumber = (x: number) => console.log(x);
const printBool = (x: boolean) => console.log(x);
printString("this is a string in regular function");
printNumber(3);
printBool(true);
console.log("==============================");
//generic function
function printX<T>(x: T): T {
  return x;
}
//*T is a type variable:It means: whatever type goes in, the same type comes out.
const str = printX<string>("This is a string in generic function");
const num = printX<number>(1234);
const bool = printX<boolean>(false);
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

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}
const numbers1 = [1, 2, 3, 4, 5, 6];
//const numbers2 = [] //TypeScript infers this as never[] (or any[] depending on config).
//Better practice is to be explicit:
const numbers2: number[] = []; //*Now T is clearly number.

const mixed = [{ name: "John" }, { name: "Jane" }];
console.log("First Element:", getFirstElement(numbers1));
console.log("First Element:", getFirstElement(numbers2)); //undefined
console.log("First Element:", getFirstElement(mixed));

// 🎀Example 3: Generic Interface

interface Box<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

class NumberBox implements Box<number> {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }
}

class StringBox implements Box<string> {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  setValue(value: string): void {
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
class GenericBox<T> implements Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

const genericNumBox = new GenericBox<number>(1000000);
const genericStrBox = new GenericBox<string>("Kageyama");

console.log("Generic Number Box value", genericNumBox.getValue());
console.log("Generic Number Box Value set", genericNumBox.setValue(90000));
console.log("Generic Number Box value", genericNumBox.getValue());
console.log("=======================");
console.log("Generic String Box Value", genericStrBox.getValue());
console.log(
  "Generic String Box Value set",
  genericStrBox.setValue("Kageyama Tobio")
);
console.log("Generic String Box Value", genericStrBox.getValue());

// Random Key example

function getRandomKeyValuePair<T extends object>(obj: T) {
  const keys = Object.keys(obj) as Array<keyof T>;

  if (keys.length === 0) {
    throw new Error("Object has no keys");
  }

  const randomKey = keys[Math.floor(Math.random() * keys.length)]!;

  return {
    key: randomKey,
    value: obj[randomKey],
  };
}

const StringObject = { a: "apple", b: "banana", c: "cheery" };
const RandomStringPair = getRandomKeyValuePair(StringObject);
console.log(RandomStringPair);

//---------------------------------------
function uniqueDataTypes<T>(item: T, defaultvalue: T) {
  return [item, defaultvalue];
}

interface Dog {
  name: string;
  breed: string;
}

const dog1 = uniqueDataTypes<Dog>(
  { name: "Spitz", breed: "Golden retriever" },
  { name: "Noe", breed: "Husky" }
);
console.log(dog1);

//=----------------------------------
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNo = filterArray<number>(numberArr, (num) => num % 2 === 0);
console.log(evenNo);
const oddNo = filterArray<number>(numberArr, (num) => num % 2 != 0);
console.log(oddNo);

//* to generate random string : a-z and 0-9
// const randomStrArr = Array.from({length:10}, ()=>Math.random().toString(36).slice(2,8))//toString() radix argument must be between 2 and 36
// console.log(randomStrArr);

//*generate random words fixed length only letters
// const randomWord =(n:number) =>
//   Array.from({ length: n }, () => "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)]).join("");
// const randomStrArr = Array.from({length:10}, ()=> randomWord(4))
// console.log(randomStrArr);

//*generate random words variable length only letters
const randomWord = (minLength = 3, maxLength = 8) =>
  Array.from(
    {
      length: (Math.random() * (maxLength - minLength + 1) + minLength) | 0,
    },
    () => String.fromCharCode(97 + ((Math.random() * 26) | 0))
  ).join("");
const randomStrArr = Array.from({ length: 10 }, () => randomWord());
console.log(randomStrArr);
const shortWords = filterArray<string>(
  randomStrArr,
  (word) => word.length <= 6
);
console.table(shortWords);
const longWords = filterArray<string>(randomStrArr, (word) => word.length > 6);
console.table(longWords);

interface Fruit {
  name: string;
  color: string;
}

const fruitarray: Fruit[] = [
  { name: "apple", color: "red" },
  { name: "orange", color: "orange" },
  { name: "banana", color: "yellow" },
  { name: "cherry", color: "red" },
];

const redFruits = filterArray<Fruit>(fruitarray, (fruit)=> fruit.color ==="red")
console.table(redFruits);
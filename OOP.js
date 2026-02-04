"use strict";
//class properties annotations
//ensures data type of a property ensuring consistency
Object.defineProperty(exports, "__esModule", { value: true });
/* example
class Person {
    readonly name: string //you can also make properties read only
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}
*/
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
const person = new Person("John smith", 40);
console.log(person);
person.age = 70;
//person.name = "hol"  //Cannot assign to 'name' because it is a read-only property.
console.log(person);
//Access Modifiers
//is used to control the visibility of class members(properties and methods)
//it determines the ways in which class members 
// can be accessed inside and outside the class
// they are : 
// public(can be accessed from anywhere both inside and outside the class)
// private(can only be accessed from within the class they're defined in)
// protected(be accessed from within the class they're defined in and extended subclass of that class)
// | Modifier   | Same Class  | Subclass   | Outside  |
// |-----------|--------------|------------|------------|
// | public    |     ✅       |     ✅     |     ✅     |
// | protected |     ✅       |     ✅     |     ❌     |
// | private   |     ✅       |     ❌     |     ❌     |
class BankAccount {
    constructor(name) {
        this.accountHolder = name;
    }
}
const account = new BankAccount("Loid Forger");
// Anyone can access it
console.log(account.accountHolder);
//another example
class Customer {
    constructor(order) {
        this.customerOrder = order;
    }
}
const table12 = new Customer("Egg Fried Rice x2");
console.log(table12.customerOrder);
//Scenario: User Authentication System (Private)
class User {
    constructor(usrname, pass, age) {
        this.username = usrname;
        this.password = pass;
        this.age = age;
    }
    validatePassword(input) {
        return this.password === input;
    }
}
const user1 = new User("Yor Briar", "admin123", 30);
// console.log(user1.password);//  Property 'password' is private and only accessible within class 'User'.
console.log(user1.validatePassword("admin"));
console.log(user1.validatePassword("admin123"));
//console.log(user1.age); //Property 'age' is protected and only accessible within class 'User' and its subclasses.
class Admin extends User {
    constructor(username, password, age) {
        super(username, password, age);
        this.role = "admin";
    }
    showProfile() {
        return `${this.username} is ${this.age} years old`;
    }
    birthday() {
        this.age++;
        return this.age;
    }
}
//getters and setters
//Getters and setters let you control how a property is read and changed.
//From the outside, it looks like a normal variable.
//Inside, you can add logic: validation, formatting, security, etc.
class Human {
    constructor() {
        this._age = 0;
    }
    //getter
    get age() {
        return this._age;
    }
    //setter
    set age(value) {
        if (value < 0) {
            console.log("Age can't be negative");
        }
        else {
            this._age = value;
        }
    }
}
const human2 = new Human();
console.log(human2.age);
human2.age = -10;
console.log(human2.age);
human2.age = 30;
console.log(human2.age);
/*🧠 Why use getters & setters?
validation
security
formatting
logging
computed values
hiding internal fields*/ 
//# sourceMappingURL=OOP.js.map
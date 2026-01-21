//class properties annotations
//ensures data type of a property ensuring consistency

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
    readonly name:string
    age: number

    constructor(name: string, age:number) {
        this.age = age
        this.name =name
    }
}

const person = new Person("John smith", 40)
console.log(person);
person.age = 70
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
    public accountHolder: string

    constructor(name:string) {
        this.accountHolder = name
    }
}

const account = new BankAccount("Loid Forger")
// Anyone can access it
console.log(account.accountHolder);

//another example
class Customer {
    public customerOrder : string
    constructor(order: string) {
        this. customerOrder = order
    }
}

const table12= new Customer("Egg Fried Rice x2")
console.log(table12.customerOrder);


//Scenario: User Authentication System (Private)

class User {
    private password: string
    public username : string

    constructor(usrname:string , pass: string) {
        this.username = usrname
        this.password = pass
    }

    validatePassword(input: string): boolean{
        return this.password === input
    }
}

const user1 = new User("Yor Briar", "admin123")
console.log(user1.validatePassword("admin"));
console.log(user1.validatePassword("admin123"));

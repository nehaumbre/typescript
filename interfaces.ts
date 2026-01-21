//An interface describes the shape of something.
// It says:
//*If you want to be this thing, you must have these properties and methods.

interface User {
  readonly id: number; //readonly
  name: string;
  age: number;
  email?: string; //optional property
}

const user1: User = {
  id: 2223,
  name: "Yor",
  age: 33, //if we dont have age then we get error as Property 'age' is missing in type '{ name: string; }' but required in type 'User'.
};

//So interfaces protect structure.
//Optional Properties : use ?

// user1.id = 8889 //Cannot assign to 'id' because it is a read-only property.

//Methods in Interface
interface Account {
  username: string;
  login(password: string): boolean;
}
//Any object that claims to be Account must implement login.

//Interface with Class
interface Human {
  name: string;
  greet(): void;
}

class Doctor implements Human {
  //implements means:“I promise to follow this contract.”
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello!Iam Dr.${this.name}`);
  }
}
const doc1 = new Doctor("Strange");
doc1.greet();
//Extending Interfaces

interface Employee extends Human {
  salary: number;
}

let emp1: Employee = {
  name: "Tuna",
  salary: 200000,
  greet() {
    console.log(`Im ${this.name} and I make ${this.salary} dollars annually`);
  },
};

emp1.greet();
//Function Interface

interface Add {
  (a: number, b: number): number;
}

const sum: Add = (x, y) => x + y;

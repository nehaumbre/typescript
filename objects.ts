//*Objects in TS

const details:/*return type annotated*/  { name: string; age: number; pincode: number } = {
    name: "Howard",
    age: 20,
    pincode: 11122
}

console.log(details);
console.log(details.age);

//factory fn
function person(name: string, age: number, pincode: number): { name: string; age: number; pincode: number } {
    return {
        name,
        age,
        pincode
    }
}

let p1 = person("george", 8, 56551)
let p2 = person("miya", 7, 56751)
console.log("factory function example====");
console.log(p1,p2);

//*using type aliases for clearer version of above code

type Address ={street: string, lane: string, pin: number}


function address(street: string, lane: string, pin: number) : Address {
    return {
        street,
        lane,
        pin
    }
}
let address1 = address("C.G street", "lane 20", 56551)
console.log(`my address is ${address1.street}, ${address1.lane},pin :${address1.pin}`);
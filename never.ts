//* NEVER : indicates that the function will not return anything
//* certain values are impossible
//* helps catch error at compile time instead of runtime

//!CASES
//* a function that always throws an error
// function throwError(message: string): never {
//     throw new Error(message);
// }
// throwError("hello") //?This function never returns because it always crashes.
//* a function that has infinite loop or run forever
// function infiniteLoop() :never {
//     while (true) {
//         console.log("still looping");
//     } //?This function also never returns.
// }
// infiniteLoop()
//* a variable that can never have a value

// let y:never
// function  neverReturns(): never {
//     while (true){}
// }
// y = neverReturns()
// console.log("example of never"); 
//? dont run abovecode  as it produces no output
console.log("never example");

//*You want to enforce exhaustive type checking
type Shape = "circle" | "square";

function getArea(shape: Shape) {
    switch(shape) {
        case "circle":
            return 3.14
        case "square":
            return 4
        default:
            const _exhaustiveCheck: never = shape
            return _exhaustiveCheck
    }
}

console.log(`case circle ${getArea("circle")}`); 
console.log(`case square ${getArea("square")}`);
// ?If you later add a new shape like "triangle", TypeScript will warn you.(compile time error nothing gets executed as a result)
// console.log(`case triangle ${getArea("triangle")}`);
//Why use this for exhaustive check?
//!Because it forces you to update your switch-case anytime you add a new union type.
//!This prevents hidden bugs.
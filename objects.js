"use strict";
//*Objects in TS
Object.defineProperty(exports, "__esModule", { value: true });
const details = {
    name: "Howard",
    age: 20,
    pincode: 11122,
};
console.log(details);
console.log(details.age);
//factory fn
function person(name, age, pincode) {
    return {
        name,
        age,
        pincode,
    };
}
let p1 = person("george", 8, 56551);
let p2 = person("miya", 7, 56751);
console.log("factory function example====");
console.log(p1, p2);
function address(street, lane, pin) {
    return {
        street,
        lane,
        pin,
    };
}
let address1 = address("C.G street", "lane 20", 56551);
console.log(`my address is ${address1.street}, ${address1.lane},pin :${address1.pin}`);
function animeStream(anime) {
    return anime;
}
const anime2 = animeStream({
    name: "One Piece",
    aired: 1999,
    genre: "Adventure",
});
const anime3 = animeStream({
    name: "Attack on Titan",
    aired: 2013,
    genre: "Dark Fantasy",
    episodes: 60,
});
console.log(anime2);
console.log(anime3.episodes);
const cast1 = {
    castName: " Robert Downey Jr."
};
const hero1 = {
    name: "Iron Man",
    age: 45,
    power: "Flying + Tech",
    Level: 9000,
    color: "Red & Gold",
    hasWeapon: false
};
const MovieIronman = {
    name: "Iron Man",
    age: 45,
    power: "Flying + Tech",
    Level: 9000,
    color: "Red & Gold",
    hasWeapon: false,
    castName: "Robert Downey Jr."
};
const hero2 = {
    name: "Thor",
    age: 1500,
    power: "Thunder",
    Level: 10000,
    color: "Silver",
    hasWeapon: true, //*What happens if something is missing?: gives AN ERROR (everything should be present)
};
console.log(hero1);
console.log(hero2);
function isHero(movie) {
    console.log(`${movie.castName} is  playing as ${movie.name}`);
}
isHero(MovieIronman);
let obj = {
    value: 0 //works
    //value: "hello", //If I use an intersection, the value cannot be string, but can be number, because number is the common type.
};
console.log(obj);
const emp1 = {
    name: "JCB",
    tenure: 6
};
console.log(`I am working at ${emp1.name} for about ${emp1.tenure} years`);
//# sourceMappingURL=objects.js.map
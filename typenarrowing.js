"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//typeof narrowing:Great for primitives.
function exFunc(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(4)); //prints 90.0000
    }
}
exFunc("Hello");
exFunc(90);
function play(anime) {
    if (anime.type === "tv") {
        return anime.episodes; // ✅ narrowed to TV anime
    }
    else {
        return anime.duration; // ✅ narrowed to MovieAnime
    }
}
console.log(play({ type: "tv", episodes: 14 }));
console.log(play({ type: "movie", duration: 140 }));
function act(hero) {
    if ("weapon" in hero) {
        return hero.weapon;
    }
    else {
        return hero.spell;
    }
}
console.log(act({ weapon: "saber" }));
console.log(act({ spell: "Fireball" }));
function propHunt(hunt) {
    if ("propItem" in hunt) {
        return hunt.propItem;
    }
    else {
        return hunt.weaponType;
    }
}
console.log(propHunt({ propItem: "pole" }));
console.log(propHunt({ weaponType: "sniper" }));
function hunt2(p) {
    if (typeof p.size === "string") {
        return p.size.toUpperCase(); // ✅ narrowed to TV anime
    }
    else {
        return p.size.toFixed(2); // ✅ narrowed to MovieAnime
    }
}
console.log(hunt2({ propitem: "box", size: 3 }));
console.log(hunt2({ propitem: "box", size: "three" }));
function ride(r) {
    if (r.kind === "onWheels") {
        console.log(r.vehicleName);
    }
    else {
        console.log(r.vehicleName);
    }
}
ride({
    kind: "onAir",
    vehicleName: "helicopter",
});
ride({
    kind: "onWheels",
    vehicleName: "bike",
});
//instance of
class Dog {
    bark() {
        console.log("woof!");
    }
}
class Cat {
    meow() {
        console.log("meow meow");
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const myDog = new Dog;
const kitty = new Cat;
animalSound(kitty);
animalSound(myDog);
//# sourceMappingURL=typenarrowing.js.map
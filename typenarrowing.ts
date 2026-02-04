type MyType = string | number;

//typeof narrowing:Great for primitives.
function exFunc(value: MyType): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(4)); //prints 90.0000
  }
}

exFunc("Hello");
exFunc(90);

type Anime =
  | { type: "tv"; episodes: number }
  | { type: "movie"; duration: number };

function play(anime: Anime) {
  if (anime.type === "tv") {
    return anime.episodes; // ✅ narrowed to TV anime
  } else {
    return anime.duration; // ✅ narrowed to MovieAnime
  }
}

console.log(play({ type: "tv", episodes: 14 }));
console.log(play({ type: "movie", duration: 140 }));

//in operator narrowing:Useful for objects

type Ninja = { weapon: string };
type Wizard = { spell: string };

function act(hero: Ninja | Wizard) {
  if ("weapon" in hero) {
    return hero.weapon;
  } else {
    return hero.spell;
  }
}
console.log(act({ weapon: "saber" }));
console.log(act({ spell: "Fireball" }));

//another example of objects :in operator

type prop = { propItem: string };
type hunter = { weaponType: string };

function propHunt(hunt: prop | hunter): string {
  if ("propItem" in hunt) {
    return hunt.propItem;
  } else {
    return hunt.weaponType;
  }
}

console.log(propHunt({ propItem: "pole" }));
console.log(propHunt({ weaponType: "sniper" }));
//type narrowing:
// starting wide, then shrinking based on logic.

//same example with typeof

type HuntGame = { propitem: string; size: number | string };

function hunt2(p: HuntGame): string {
  if (typeof p.size === "string") {
    return p.size.toUpperCase(); // ✅ narrowed to TV anime
  } else {
    return p.size.toFixed(2); // ✅ narrowed to MovieAnime
  }
}

console.log(hunt2({ propitem: "box", size: 3 }));
console.log(hunt2({ propitem: "box", size: "three" }));

// Every narrowing style answers a different philosophical question:
// in → does the shape contain this?
// typeof → what primitive is this?
// instanceof → who constructed this?
// discriminant → what identity does this carry?
// custom guard → what logic proves this?
// truthy → does this value exist?

type landVehicle = {
  kind: "onWheels";
  vehicleName: string;
};

type airVehicle = {
  kind: "onAir";
  vehicleName: string;
};

type passenger = landVehicle | airVehicle;

function ride(r: passenger): void {
  if (r.kind === "onWheels") {
    console.log(r.vehicleName);
  } else {
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
  bark(): void {
    console.log("woof!");
  }
}

class Cat {
  meow(): void {
    console.log("meow meow");
  }
}

function animalSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog = new Dog
const kitty = new Cat
animalSound(kitty)
animalSound(myDog)

//*Objects in TS

const details: /*return type annotated*/ {
  name: string;
  age: number;
  pincode: number;
} = {
  name: "Howard",
  age: 20,
  pincode: 11122,
};

console.log(details);
console.log(details.age);

//factory fn
function person(
  name: string,
  age: number,
  pincode: number
): { name: string; age: number; pincode: number } {
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

//*using type aliases for clearer version of above code
//*Type aliases in TypeScript are a way to give a custom name to a type.
//*They help make your code cleaner, reusable, and easier to understand.

type Address = { street: string; lane: string; pin: number };

function address(street: string, lane: string, pin: number): Address {
  return {
    street,
    lane,
    pin,
  };
}
let address1 = address("C.G street", "lane 20", 56551);
console.log(
  `my address is ${address1.street}, ${address1.lane},pin :${address1.pin}`
);

// type Anime = {
//     name: string,
//     aired: number,
//     genre: string
// }

// function animeStream(name: string, aired: number, genre: string) : Anime {
//     return {
//         name, aired, genre
//     }
// }

// const anime2 = animeStream("One Piece", 1999, "Adventure");
// const anime3 = animeStream("Attack on Titan", 2013, "Dark Fantasy");

// console.log(anime2);
// console.log(anime3.genre);

//* rewriting above code

type Anime = {
  readonly name: string;
  //*readonly properties can be set once
  // *(usually when the object is created) and cannot be changed later
  //*They are perfect for IDs, creation dates, constants, API data, etc.
  aired: number;
  genre: string;
  episodes?: number; //* optional property
};

function animeStream(anime: Anime): Anime {
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

//anime3.name = "NAruto"  //!Cannot assign to 'name' because it is a read-only property.

//*Intersection Types in TypeScript (&)
//* A AND B → must satisfy both or simply say The resulting type has ALL properties from the combined types.

type Human = {
  name: string;
  age: number;
};

type SuperPower = {
  power: string;
  Level: number;
};

type Costume = {
  color: string;
  hasWeapon: boolean;
};

type SuperHero = Human & SuperPower & Costume;

type Cast = {
    castName : string
}

const cast1 : Cast = {
    castName :" Robert Downey Jr."
}
const hero1: SuperHero = {
  name: "Iron Man",
  age: 45,
  power: "Flying + Tech",
  Level: 9000,
  color: "Red & Gold",
  hasWeapon: false
};

const MovieIronman: SuperHero & Cast= {
  name: "Iron Man",
  age: 45,
  power: "Flying + Tech",
  Level: 9000,
  color: "Red & Gold",
  hasWeapon: false,
  castName: "Robert Downey Jr."
};

const hero2: SuperHero = {
  name: "Thor",
  age: 1500,
  power: "Thunder",
  Level: 10000,
  color: "Silver",
  hasWeapon: true,  //*What happens if something is missing?: gives AN ERROR (everything should be present)
};

console.log(hero1);
console.log(hero2);

function isHero(movie: SuperHero & Cast) {
  console.log(`${movie.castName} is  playing as ${movie.name}`);
}

isHero(MovieIronman);
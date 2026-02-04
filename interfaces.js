"use strict";
//An interface describes the shape of something.
// It says:
//*If you want to be this thing, you must have these properties and methods.
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 2223,
    name: "Yor",
    age: 33, //if we dont have age then we get error as Property 'age' is missing in type '{ name: string; }' but required in type 'User'.
};
class Doctor {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello!Iam Dr.${this.name}`);
    }
}
const doc1 = new Doctor("Strange");
doc1.greet();
let emp1 = {
    name: "Tuna",
    salary: 200000,
    greet() {
        console.log(`Im ${this.name} and I make ${this.salary} dollars annually`);
    },
};
emp1.greet();
const sum = (x, y) => x + y;
let anime1 = {
    name: "Haikyu",
    genre: "Sports",
    watchlist: true,
    play() {
        console.log(`Now Playing ${this.name}`);
    },
    addtoFav: true
};
anime1.play();
let anime2 = {
    name: "Gintama",
    genre: "Comedy",
    watchlist: true,
    play() {
        console.log(`Now Playing ${this.name}`);
    },
    addtoFav: true,
};
anime2.play();
class AnimeMovies {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
    }
    play() {
        console.log(`Anime movie to watch ${this.name}`);
    }
}
const bingeMovie = new AnimeMovies("Suzume", "Fantasy");
bingeMovie.play();
const naruto = {
    name: "Naruto",
    genre: "Action",
    watchlist: true,
    episodes: 220,
    rating: 9,
    play() {
        console.log("Playing Naruto...");
    },
    pause() {
        console.log("Paused Naruto.");
    },
};
naruto.play();
naruto.pause();
//# sourceMappingURL=interfaces.js.map
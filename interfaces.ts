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

//another self interface example

interface Anime {
    name : string
    genre : string
    watchlist? : boolean
    play() : void
    }

interface bingeAnime extends Anime {
    addtoFav : boolean
}

let anime1 : bingeAnime = {
    name : "Haikyu",
    genre : "Sports",
    watchlist : true,
    play() {
        console.log(`Now Playing ${this.name}`);
    },
    addtoFav : true
}

anime1.play()
let anime2: bingeAnime = {
  name: "Gintama",
  genre: "Comedy",
  watchlist: true,
  play() {
    console.log(`Now Playing ${this.name}`);
  },
  addtoFav: true,
};
anime2.play();

class AnimeMovies implements Anime {
  name: string
  genre: string

  constructor(name: string, genre: string) {
    this.name = name;
    this.genre = genre
  }

  play() {
    console.log(`Anime movie to watch ${this.name}`);
  }
}

const bingeMovie = new AnimeMovies("Suzume", "Fantasy")
bingeMovie.play()


//declaration merging: if you declare the same interface name more than once, TypeScript stitches them together into a single shape.
interface Animes {
  name: string;
  genre: string;
  watchlist?: boolean;
  play(): void;
}

interface Animes {
  rating: number;
  episodes : number
  pause(): void;
}


const naruto: Animes = {
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

naruto.play()
naruto.pause()
//A union means a value can be ONE of multiple types.

// This OR that, not both.

type TVAnime = {
    type : "tv",
    name : string,
    episodes : number
}

type MovieAnime ={
    type : "movie",
    name : string,
    duration : number
}

// union type
type Anime = TVAnime | MovieAnime;

const naruto: Anime = {
  type: "tv",
  name: "Naruto",
  episodes: 220
};

const yourName: Anime = {
  type: "movie",
  name : "Your Name",
  duration : 106
}

const suzume: Anime = {
  type: "movie",
  name : "SUZUME",
  duration : 90
}
//!INVALD CODE BELOW
// const aot: Anime = {
//   type: "tv",
//   name: "AOT",
//   duration: 1000000, //!Object literal may only specify known properties, and 'duration' does not exist in type 'TVAnime'.
// };

const logAnime = (a : Anime) =>
    a.type === "tv" ? console.log(a) : console.log(a);

logAnime(naruto)
logAnime(yourName)
logAnime(suzume)

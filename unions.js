"use strict";
//A union means a value can be ONE of multiple types.
Object.defineProperty(exports, "__esModule", { value: true });
const naruto = {
    type: "tv",
    name: "Naruto",
    episodes: 220
};
const yourName = {
    type: "movie",
    name: "Your Name",
    duration: 106
};
const suzume = {
    type: "movie",
    name: "SUZUME",
    duration: 90
};
//!INVALD CODE BELOW
// const aot: Anime = {
//   type: "tv",
//   name: "AOT",
//   duration: 1000000, //!Object literal may only specify known properties, and 'duration' does not exist in type 'TVAnime'.
// };
const logAnime = (a) => a.type === "tv" ? console.log(a) : console.log(a);
logAnime(naruto);
logAnime(yourName);
logAnime(suzume);
//# sourceMappingURL=unions.js.map
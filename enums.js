"use strict";
//*Enums : collection of related values that can be used interchangebly
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions[WeatherConditions["Sunny"] = 0] = "Sunny";
    WeatherConditions[WeatherConditions["Cloudy"] = 1] = "Cloudy";
    WeatherConditions[WeatherConditions["Rainy"] = 2] = "Rainy";
    WeatherConditions[WeatherConditions["Snowy"] = 3] = "Snowy";
})(WeatherConditions || (WeatherConditions = {}));
//*how to use enums
const currentWeather = WeatherConditions.Cloudy;
console.log(`today is ${currentWeather}`); //By default, TypeScript enums are numeric,so WeatherConditions.Cloudy equals 1.
console.log(`today is ${WeatherConditions[currentWeather]}`); //use this Reverse lookup (numeric enums only) method
//*best practise for string enums
var Directions;
(function (Directions) {
    Directions["east"] = "east";
    Directions["west"] = "west";
    Directions["north"] = "north";
    Directions["south"] = "south";
})(Directions || (Directions = {}));
const walk = Directions.north;
console.log(`walk in ${walk} direction`);
//*How to use enums in conditions
if (walk === Directions.north) {
    console.log("We going up");
}
else {
    console.log("we aint going up");
}
//# sourceMappingURL=enums.js.map
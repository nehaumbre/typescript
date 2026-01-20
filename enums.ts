// Enums : collection of related values that can be used interchangebly

enum WeatherConditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy,
}

//how to use enums

const currentWeather = WeatherConditions.Cloudy
console.log(`today is ${currentWeather}`); //By default, TypeScript enums are numeric,so WeatherConditions.Cloudy equals 1.
console.log(`today is ${WeatherConditions[currentWeather]}`); //use this Reverse lookup (numeric enums only) method

//best practise for string enums
enum Directions {
    east = "east",
    west = "west",
    north = "north",
    south = "south",
}

const walk = Directions.north

console.log(`walk in ${walk} direction`);
//How to use enums in conditions
if (walk === Directions.north) {
    console.log("We going up");
}else {
    console.log("we aint going up");
}
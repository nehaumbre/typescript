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

function play(anime: Anime){
    if (anime.type === "tv"){
      return anime.episodes; // ✅ narrowed to TV anime
    }else{
      return anime.duration; // ✅ narrowed to MovieAnime
    }
}

console.log(play({type : "tv", episodes: 14}))
console.log(play({ type: "movie", duration: 140 }));

//in operator narrowing:Useful for objects

type Ninja = {weapon: string}
type Wizard = { spell : string}

function act(hero: Ninja | Wizard){
    if("weapon" in hero){
        return hero.weapon
    }else{
        return hero.spell
    }
}
console.log(act({weapon: "saber"}))
console.log(act({ spell: "Fireball" }))


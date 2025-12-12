//array types:stores multiple values of same data type
// you can specify the type of values that an array can  hold in TS
//?2 ways
//?[] notation
//? Array <type>

const ids: number[] = [1,2,3,4,5];
const names : Array<string> = ["lev", "kuro", "kenma"]
console.log(ids , names);

//Multi dimensional arrays
const matrix1 : number[][] = [[1,2,3],[4,5,6],[0,0,0]]
console.log(matrix1);
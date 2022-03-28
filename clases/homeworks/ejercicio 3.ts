// Array
let tennisPoints: number[] = [15, 30, 40];
let anotherWay: Array<number> = [15, 30, 40];

// Array + Any
let dynamicList: any[] = ["Franco", 26, true];

// Tuple
let person: [string, number] = ["Franco", 26];

let extendIncorrectPerson: [string, number, boolean] = ["Franco", 26, true];

//crea una tupla, donde en la primera posicion haya un booleano y en la segunda un string

let tupla: [boolean, string] = [true, "false"];
let tupla2: [boolean, ...Array<{}>] = [true, "false", "asd", "asdsfs", 2, 3];
let tupla3: [boolean, ...Array<string>] = [true, "false", "asd", "asdsfs"];


//crea un arreglo de strings

let arrayStrings: string[] = ["uno", "dos", "tre"] 

export {
    tennisPoints,
    anotherWay
    }
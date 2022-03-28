//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!

function pluck<I extends object>(arreglo: [], prop: keyof I) {
    return arreglo.map((object) => {
        return object[prop]
    }) 
}
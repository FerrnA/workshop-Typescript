function suma7(a: number | string, b: number | string): number | string |void {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    }
    if (typeof a === "number") {
        a = a.toString()
    }
    if (typeof b === "number") {
        b = b.toString()
    }
    return a + b
} 


let elemento2 = suma7("2", 2)
console.log(elemento2)
// Logra que esta funcion tambien concatene strings
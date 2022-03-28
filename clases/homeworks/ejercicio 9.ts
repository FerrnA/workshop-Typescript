function suma9(a: number, b: string): string;
function suma9(a: string, b: string): string;
function suma9(a: string, b: number): string;
function suma9(a: number, b: number): number;
function suma9(a: any, b: any): any {
    return a + b;
}

let resultado = suma9(2, "2") //cambien los parametros para ver su comportamiento
//haciendo hover sobre resultado
let resultado2 = suma9("2", "2")
let resultado3 = suma9("2", 2)
let resultado4 = suma9(2, 2)
let resultado5 = suma9(0, null)
//Aplicar lo mismo para el resto de las operaciones matematicas!
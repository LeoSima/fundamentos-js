//boolean

const usuarioLigado = false
const contaPaga = false

// truthy ou falsy

// 0 => false
//1 = > true

console.log(0 == false)
console.log(1 == true)
console.log("" == false)

// null (Vazio/nada)
// undefined (Variável declarada mas que não recebe valor)

let varUndefined; // undefined
let varNull = null; // null

console.log(varUndefined)
console.log(varNull)

let numero = 7;
let texto = "Leo";

console.log(typeof(numero)) // number
console.log(typeof(texto)) // string
console.log(typeof(varUndefined)) // undefined
console.log(typeof(varNull)) // object

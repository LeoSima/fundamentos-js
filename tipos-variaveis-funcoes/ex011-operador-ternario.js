// Operador Ternário

const idadeMinima = 18
const idadeCliente = 19

// if(idadeCliente >= idadeMinima){
//     console.log('O cliente pode beber alcoólicos')
// } else {
//     console.log('O cliente não pode beber alcoólicos')
// }

console.log(idadeCliente >= idadeMinima ? 'O cliente pode beber alcoólicos' : 'O cliente não pode beber alcoólicos')

// Apesar de ser um código mais enxuto, a boa prática é usar o if para códigos mais complexos por ser mais fácil de se compreender e dar manutenção. O uso do operador ternário é indicado apenas para códigos pequenos e pontuais.

// É chamado de ternário pois há três operadores ('>=', '?' e ':')

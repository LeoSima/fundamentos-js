// Operadores de Comparação

// == (comparação implícita)

const numero = 7
const texto = '7'

console.log(numero == texto) // true
// O JavaScript fez uma conversão implícita dos tipos de dados e verificou que seus valores são iguais

// ===

console.log(numero === texto) // false
// Nesse caso, o JavaScript leva em cosideração o tipo das variáveis e, uma sendo number e a outra string, são diferentes

// == Compara apenas o valor
// === Compara o valor e o tipo de dado

// Por boas práticas, o melhor é usar o === e, caso seja necessário, fazer a conversão dos valores explicitamente, com Number() ou String(), por exemplo.

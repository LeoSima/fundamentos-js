// tipo de dados
// boolean

// conversão implícita

const numero = 456
const numeroString = "456"

console.log(numero === numeroString) // false (Apesar de 'iguais', são dados de tipos diferentes - string e number)
console.log(numero == numeroString) // true (Nesse caso, há uma conversão implícita)
console.log(numero + numeroString) // 456456 (Nesse caso, há conversão implícita de number para string e o sinal de soma se torna uma concatenação)

//conversão explícita
// Number()
// String()

console.log(numero + Number(numeroString)) // 912 (A função Number() transforma o numeroString em um tipo number e, posteriormente, é feita a soma entre os dois valores)
console.log(String(numero) === numeroString) // true (A função String() transforma o numero em um tipo string e, posteriormente, faz a verificação)

let numeroHex = "F6"

console.log(Number(numeroHex)) // NaN (A função Number() retorna NaN caso algum valor da string passada como parâmetro não seja um número)

let usuarioConectado = false

console.log(String(usuarioConectado)) //false (Apesar do output ser um false, não se engane! Esse false é uma string!)
console.log(typeof(String(usuarioConectado))) // string
console.log(Number(usuarioConectado)) // 0 (A função Number() coverte valores falsos para 0 e verdadeiros para 1)

let largura = "5"
let altura = "5"

console.log(+ largura * + altura) // 25 (O símbolo de + faz a conversão de string para number)

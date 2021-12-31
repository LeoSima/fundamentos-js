// Expressão de função

const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(2, 3))



// É uma maneira diferente de escrever uma função
// As principais características que podemos ver na expressão de função é: a função não tem nome (soma é o nome da const) e é um jeito mais curto de escrever a função. Mas a principal diferença é que a declaração de função pode ser feita depois da chamada, já a expressão de função não. Ex.:

console.log('\n' + somaNumeros(2 ,1))

function somaNumeros(num1 = 0, num2 = 0){
    return num1 + num2
}

console.log(expressaoSoma(1, 1))

const expressaoSoma = function(num1 = 0, num2 = 0) {return num1 + num2}

// Parâmetros / Argumentos

// Os parâmetros são valores fornecidos para a função

function soma(num1, num2){
    return num1 + num2
}

console.log(soma(2, 5))

// A função pede dois parâmetros - num1 e num2 - e, quando a função é chamada, os valores 2 e 5 são passados como seus parâmetros

// A ordem dos parâmetros é importante

function multiplica(num1, num2){
    return num1 * num2
}

console.log(multiplica(soma(2,5), soma(2,1)))

// Uma função também pode ser passada como parâmetro

// Quando você não informa um valor para o parâmetro, por padrão ele é interpretado como undefined. Para evitar isso, você pode iniciar o parâmetro com um valor padrão

function multiplicacao(num1 = 1, num2 =1){
    return num1 * num2
}

console.log(multiplicacao(4))

// Por boas práticas, as funções devem receber o menor número de parâmetros possível. Caso você esteja passando muitos parâmetros, avalie se há como quebrar sua função em outras menores.

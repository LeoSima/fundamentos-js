// Arrow Function

const apresentaArrow = nome => `Meu nome é ${nome}`
console.log(apresentaArrow("Leo"))

const soma = (num1 = 0, num2 = 0) => num1 + num2
console.log(soma())

// As arrows functions são mais enxutas, em casos onde só há uma linha de código, não é necessário chaves e nem o return.

const somaNumerosPequenos = (num1 = 0, num2 = 0) => {
    if(num1 || num2 >= 10){
        return "Insira apenas números menores que 10"
    } else {
        return num1 + num2
    }
}

console.log(somaNumerosPequenos(10, 7))

// Em caso de funções maiores, é necessário as chaves e o return explícito

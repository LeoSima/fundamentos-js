//Funções

// let x = ''
// console.log(x)
// x = 'Oi'

// 1) Declarando a função
function imprimeTexto(texto){
    console.log(texto)
}

// 2) Executando a função
imprimeTexto('Oi')

// O return é uma palavra chave usada para retornar um valor da função para o trecho de código onde a função é chamada
function soma(){
    // return deve ser a última linha da função, pois quando ela for executada, a função é encerrada
    return 2 + 2
}

imprimeTexto(soma())

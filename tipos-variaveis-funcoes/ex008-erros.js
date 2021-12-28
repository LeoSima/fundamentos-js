// Erros e stacktrace

/*const numero*/
// SyntaxError: Missing initializer in const declaration => Uma const deve ser inicializada com um valor, caso contrário, haverá um erro de sintaxe.

/*const numero = 0;

console.log(numero*/
// SyntaxError: missing ) after argument list => Os parentêses foram aberto para passar os argumentos no console.log, entretanto, não foi fechado. Isso também acarreta num erro de sintaxe

/*console.log(minhaVar)*/
// ReferenceError: minhaVar is not defined => A variável minhaVar chamada no console.log não existe no código e isso gera um erro de referência

// Além das linhas transcritas acima, os erros mostram outras linhas no console. Essas linhas são a stacktrace e mostra todo o caminho que o código percorreu entre vários arquivos. Isso ajuda a encontrar o local onde o erro ocorre.

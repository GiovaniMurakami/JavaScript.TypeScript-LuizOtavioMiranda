// Função definica com 'function', possui 'arguments' que sustenta todos os argumentos fora dos argumentos esperados no campo correto
function funcao(){
    let total = 0
    for (argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8)

function funcao2(a, b, c, d, e, f){
    console.log (a, b, c, d, e, f)
}

funcao2(1, 2, 3) // 1, 2, 3, undefined, undefined, undefined

//valor padrão
function valorPadrao(a, b = 0){ // Isso permite settar um valor padrão
    console.log(a + b)
}

valorPadrao(2)
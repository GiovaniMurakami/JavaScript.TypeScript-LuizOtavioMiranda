function falaOi(){
    console.log(`Oi`)
}

falaOi()

//First-class Objects | tratar uma função como dado

//function expression
const souUmDado = function() {
    console.log(`Sou um dado`)
}

souUmDado()

function executaFunção(funcao){
    funcao()
}

executaFunção(souUmDado)

//Arrow Functions
const arrow = ()=> {
    console.log("Arrow function")
}

arrow()

//Dentro de um objeto
const obj = {
    falar() {
        console.log("Estou falando...")
    }
}

obj.falar()
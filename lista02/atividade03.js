/*3) Construa uma função que receba um número.
a) Se o número for  positivo, mostrar a informação de que ele é positivo.
b) Se o número for negativo, mostrar a informação de que ele é negativo. */

function ehPositivo(num){
    if(num>=0){
        return "É positivo";
    }else{
        return "É negativo";
    }
}

console.log(ehPositivo(-5));
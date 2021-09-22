/*1) Exibir no console o resultado das seguintes validações, dado o valor da variável _numero:
a)Se o valor for menor que zero, mostrar: O valor número é um Número negativo.
b)Se o valor for maior ou igual a zero, mostrar: O valor número é um Número positivo. */

function ehNegativo(numero){
    if(numero <0){
        return "É um número negativo";
    }if(numero>=0){
        return "É um número positivo";
    }
}

console.log(ehNegativo(0))
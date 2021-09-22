/*2) Criar uma função em javascript que receba três parâmetros numéricos valor A, valor B e valor C, validar se:
a) O (valor A  + valor C)  é maior que valorB
 i) Se for, exibir no console os valores de valor A + Valor C e a soma deles.
 ii) Se não for, exibir no console que os valores de valor A + Valor C é igual ao valor B.
 */
function valida(a,b,c){
    let sum;
    if((a+c) > b){
        sum = a+c;
        return "Valor A: "+a+"| Valor C: "+c+ "| Soma: "+sum;
    }else{
        return "Valor A: "+a+" + Valor C: "+c+ "| igual ao valor B: "+b;
    }
}

console.log(valida(1,2,1))
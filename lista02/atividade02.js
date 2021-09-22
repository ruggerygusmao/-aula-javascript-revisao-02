/*2) Criar um bloco de código, onde deverá ter três variáveis do tipo inteiro: a, b, c. Verifique se:
a) Se todos os lados são iguais, o triângulo será equilátero;
b) Se todos os lados forem diferentes, será escaleno;
c) Se nenhuma das duas condições anteriores for atendida, será isósceles. */

function triangulo(a,b,c){
    if((a==b)&&(b==c)&&(c==a)){
        return "Triângulo equilátero";
    }if((a!=b) || (b!=c)){
        return "Triângulo escaleno";
    }else{
        return "Triângulo isósceles";
    }
}

console.log(triangulo(0,2,0));
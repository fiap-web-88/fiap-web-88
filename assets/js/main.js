//trabalhando com JavaScript em um arquivo externo.
//const nome = "Fiap";
//console.log(nome, "chamando variável criada com var");

//var nome = "Fiap";

//escreve("Exemplo de função nominal");

//função nominal -udf
//function escreve(titulo) {
   // alert(titulo);
//}

//7 tipos diferentes de erros em JavaScript sendo 3 os mais comuns
//1- SyntaxError- escreveu algo errado
//2- ReferenceError - quando chama alguém que não existe
//3- TypeError- violou alguma regra.Ex: atribuir valor diferente a uma constante
//4- RangeError-estourou o limite de aninhamento ou faixa de valores(ex:loop infinito)
//5- EvalError- existe um comando perigoso no JavaScript chamado eval.
//6- InternalError-memória, processamento, crash no chrome ou v8
//7- URIError- erros que acontecem ao consumir dados externos, com URL inválidos.

//existem 4 formas de criar uma função em JavaScript

//Função nominal- sofre hoisting- A função é içada para a primeira linha do código
function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = novoTitulo;
}
//mudaTitulo("Vai Corinthians");

//Function Expression- quando uma variavel recebe uma função como valor. 
//É melhor indicada pois não sofre hoisting, ou seja s emantém no escopo
//Função anônima- quando não tem nome mas tem a palavra function.
//A função anônima precisa de um contexto, ou dentro de parenteses ou dentro de outra função.
//const mudaTitulo2 = function(target, novoTitulo) {
 //   document.querySelector(target).innerHTML = novoTitulo;
//};

//mudaTitulo2("h1", "Trocando o título");

//Arrow Function- É uma função criada no ES6 ou ES2015
//não existe o "this" dentro de uma arrow function.
//não existe um método construtor.
// a vanragem é que usa uma sintaxe mais simples e prática
const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};

setInterval(relogio, 1000);
//O setInterval é uma função de repetição(loop infinito)

//setInterval(() => {},tempo);

const frases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"];

const mudaFrase = (target, frases, tempo) => {
    //const frases = frases[Math.floor(Math.random() * frases.length)];
    //mudaTitulo2("h3", frase);

    let total = 2;
    setInterval(() => {
        document.querySelector(target).innerHTML = frases[
            total >= frases.length -1? total = 0: total += 1 ];
    },tempo * 1000);
    
};
mudaFrase("h1", frases, 4)

//setInterval((4000) => {"h1", frases},tempo);
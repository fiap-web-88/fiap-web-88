const carrosDom = document.querySelector("#carros");

const veiculos = ["Chevrolet", "Ford", "Fiat", "Vw", "Honda", "Toyota", "Hyundai"];

veiculos.push("BMW");
//para o final do array use o push

veiculos.unshift("Audi");
//para adicionar no inicio do array

//removendo do inicio do array
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array", primeiro);

//removendo ao final do array
const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array", ultimo);

//removendo um elemento do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1);

//removendo mais de um elemento do array
const removidos = veiculos.splice(1,2);

//removendo e adicionando elementos
const removido2 = veiculos.splice(1,2, "Ferrari", "Lamborghini");

veiculos.forEach((value, key) => {
    carrosDom.innerHTML += `<option value="${key}">${value}</option>`;
});

//forEach é um laço de iteração para arrays(item por item do array)
//////////////////////////////////////////////////////////
//sob a otica do paradigma funcional existe a imutabilidade,
//não muda apenas evolui

const nbaTeams = ["Worriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];

const newNba = nbaTeams.slice( -1);
//slice- retorna um novo array, o primeiro parâmetro é opicional, e começa em zero.
//o último parâmetro determina até onde deve ser filtrado, porém excluindo este último elemento.
console.log(nbaTeams);
console.log(newNba);

//map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring
//split- transforma uma string em array(cada espaço na string será um elemento do array) 
//join- pega um array e junta como se fosse uma mesma string
const name = "Vanessa Sayuri Nakasone Higa";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0] ,nameArray.slice(-1)].join(" ");
console.log(nameComplete);

const procuraCeltic = (nomeTime) => {
    return nomeTime == "Celtics" || nomeTime == "Raptors";
};

//map- semelhante ao forEach mas retorna novo array, mapeando e buscando no array original
const celticsMap = nbaTeams.map(procuraCeltic);
//filter- também percorre o array mas retorna os elementos requeridos(todos valores true)
const celticsFilter = nbaTeams.filter(procuraCeltic);
//find- retorna o primeiro elemento requerido(true), a primeira ocorrência de uma busca
const celticsFind = nbaTeams.find(procuraCeltic);

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "find");
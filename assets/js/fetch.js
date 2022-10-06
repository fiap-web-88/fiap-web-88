const cep = document.querySelector("#cep");

const showData = (result) => {
    for (const campo in result) {
        if(document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = result[campo];
        }
    }
};

cep.addEventListener("blur", async (e) => {
    let search = cep.value.replace("-", "");// para tirar o traço e substiuir para o vazio
//só posso pegar o que a pessoa digitou depois de um evento(value), 
//no caso o evento foi "blur"(quando sai do campo)
//Nan- Not a number


    if(search.length < 8 || Number(search.value) === NaN) {
        alert("CEP inválido!");
        cep.focus();
        return;
    }

//https://viacep.com.br/ws/01311100/json/

   const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
   };

   try{
    const resultado = await fetch(`https://viacep.com.br/ws/${search}/json/`, options);
    const json = await resultado.json();
   showData(json);
   }catch(error) {
    console.log("Temos um problema",error.message);
   }
});
   //recurso assíncrono, retorna uma promise porque eu não sei se vai funcionar.
   //Promise é um recurso que não temos certeza, é uma intenção.
   //Se der certo ele vai retornar o resolve, se der errado ele vai retornar o reject.
   //resolver quer dizer, funcionou, aí usamos a função then, se der errado, usamos o catch
   //Toda Promise pode ser substituida pelo async e await
   //Onde estiver await o async deve estar

 //  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
   //.then((response) => {
    //response.json().then((result) => {
      //  console.log(result);
    //});
   //})
   //.catch((e) => {
    //console.log(e.message);
   //});



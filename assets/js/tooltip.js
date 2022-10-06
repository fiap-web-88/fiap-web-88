const alvoTooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

//alvo.addEventListener("evento", função);
//mouseover, função arrow no body.
//mouseout, função arrow no body devolve sem cor

body.addEventListener("mouseover" , (e) => {
    body.style.backgroundColor = "#d4d4d4";
});

body.addEventListener("mouseout" , (e) => {
    body.style.backgroundColor = "unset";
});

const textTooltip = "Gelatooo para tú aaaaaah chasy wiiiii wiiiii daa hahaha me want bananaaa!Potatoooo poulet tikka masala butt poopayee uuuhhh po kass. Chasy belloo! Daa baboiii ti aamoo! Jeje tulaliloo poulet tikka masala belloo!";

function tooltip(alvo,mensagem,evento) {
    
        if (document.querySelector(".tooltip")){
            document.querySelector(".tooltip").remove();
            
        }
        const newDiv = document.createElement("div");
        newDiv.classList.add("tooltip");
        newDiv.innerHTML = mensagem;
        const largura = 200;
        newDiv.style.position = "fixed";
        newDiv.style.width = largura + "px";
        newDiv.style.top = evento.clientY + "px";
        newDiv.style.display = "flex";
        newDiv.style.left= (evento.clientX + largura > body.clientWidth ? evento.clientX - largura - 20 : evento.clientX + largura ) + "px";
        alvo.appendChild(newDiv);

}
/*
tooltip.addEventListener("mouseover" , (e) => {

    console.log("Altura da Página", body.clientHeight);
    console.log("Largura da Página", body.clientWidth);
    console.log("Altura do tooltip", tooltip.clientHeight);
    console.log("Largura do tooltip", tooltip.clientWidth);
    console.log("Alrtura do mouse", e.clientY);
    console.log("Largura do mouse", e.clientX);
    

   // if(document.querySelector(".tooltip")){
   //     document.querySelector(".tooltip").remove();
   // }
   // const newDiv = document.createElement("div");
   // newDiv.classList.add("tooltip"); //para aplicar o CSS
   // newDiv.innerHTML = "Gelatooo para tú aaaaaah chasy wiiiii wiiiii daa hahaha me want bananaaa!Potatoooo poulet tikka masala butt poopayee uuuhhh po kass. Chasy belloo! Daa baboiii ti aamoo! Jeje tulaliloo poulet tikka masala belloo!";

    const largura = 200;
    newDiv.style.position = "fixed";
    newDiv.style.width = 200 + "px";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.display = "flex";
    newDiv.style.left= (e.clientX + largura > body.clientWidth ? e.clientX - largura - 20 : e.clientX + largura ) + "px";

   
    
    hearder.appendChild(newDiv);
});
*/
alvoTooltip.addEventListener("mouseout", (e) => {
    if(document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
});

//desafio- criar o tooltip em uma função para gerar vários tooltip
alvoTooltip.addEventListener("mouseover", (e) => {
    tooltip(header, textTooltip,e);
}  );



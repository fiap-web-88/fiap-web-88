//diferenças entre arrow function e função nominal ou expressões de função.

const resultado = document.querySelector("#resultado");

let myFunc1 = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

//chamando a função
myFunc1.showArguments (
    "Vai Corinthians",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

//o arrow function não acessa argument
let myFunc2 = {
    showArguments: () => {
     //   resultado.innerHTML = arguments;
     //   console.log(...arguments);
    },
};

myFunc2.showArguments (
    "Vai Corinthians",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

let user = {
    name: "Vanessa",
    usandoArrow: () => {
        console.log("Meu nome é", this.name, "Arrow Function");
    },
    usandoNominal() {
        console.log(" Meu nome é", this.name, "Nominal Function");
    },
};

user.usandoArrow();
user.usandoNominal();
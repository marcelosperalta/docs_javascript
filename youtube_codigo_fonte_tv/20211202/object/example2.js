const brasil = {
    populacao: "212.6 milhoes",
    renda_per_caputa: "US$ 6.796,84",
    expectativa_vida: "75 anos",
    pib: "US$ 1.445 trilhoes",
    pais: "Brasil",
    idioma: "Portugues",
    capital: "Brasilia",
    moeda: "Real",
    religiao: {
        catolica: "64.4%",
        protestante: "22.2%",
        espirita: "2.0%",
        outras: "3.2%",
        nenhuma: "8.0%",
    },
};

// const { capital, religiao: { catolica } } = brasil;
// console.log(catolica); // 64.4%

// ----- without destructuring
// let capital = brasil.capital;
// capital = !capital ? "Nao informado" : capital;
// console.log(capital); // Brasilia
// ----- with destructuring
const { capital: capital_pais = "Nao informado"} = brasil;
console.log(capital_pais); // Brasilia
const { presidente: presidente_pais = "Nao informado"} = brasil;
console.log(presidente_pais); // Nao informado
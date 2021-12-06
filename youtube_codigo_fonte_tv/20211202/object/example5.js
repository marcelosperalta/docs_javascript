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
// ----- without destructuring
// let expectativa_vida = (pais) => {
//     return pais.expectativa_vida
// }
// const expectativa_vida_brasil = expectativa_vida(brasil);
// ----- with destructuring
let expectativa_vida = ({expectativa_vida}) => {
    return expectativa_vida
}
const expectativa_vida_brasil = expectativa_vida(brasil);
console.log(expectativa_vida_brasil); // 75 anos
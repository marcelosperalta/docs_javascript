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

const { moeda, capital: capital_pais = "Nao informado", pib, ...rest } = brasil;
console.log(capital_pais); // Brasilia
console.log(rest);         // {
                           //     populacao: '212.6 milhoes',
                           //     renda_per_caputa: 'US$ 6.796,84',
                           //     expectativa_vida: '75 anos',
                           //     pais: 'Brasil',
                           //     idioma: 'Portugues',
                           //     religiao: {
                           //       catolica: '64.4%',
                           //       protestante: '22.2%',
                           //       espirita: '2.0%',
                           //       outras: '3.2%',
                           //       nenhuma: '8.0%'
                           //     }
                           //   }

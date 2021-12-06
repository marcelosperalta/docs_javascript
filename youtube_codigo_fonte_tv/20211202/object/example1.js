// Destructuring assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const codigofontetv = {
    nome: "Código Fonte TV",
    id: "SDG223gdfgER$%$Hdfgfg",
    subs: "380 mil",
    views: "18 milhoes",
    link: "https://www.youtube.com/channel/UCFuIUoyHB12qpYa8Jpxoxow"
}

// const views = codigofontetv.views;
// const nome = codigofontetv.nome;
// console.log(views);
// console.log(nome);

// destructuring 
// const { nome, id, subs, views, link } = codigofontetv;
// console.log(nome);  // Código Fonte TV
// console.log(views); // 18 milhoes

// destructuring 
const { nome: canal, id, subs: inscritos, views, link } = codigofontetv;
console.log(canal);     // Código Fonte TV
console.log(inscritos); // 380 mil
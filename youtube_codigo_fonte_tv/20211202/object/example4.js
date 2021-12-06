// tratamento para objetos nulos recebidos de APIs usando JSON

// const test = () => null;
// const { nome = "Test" } = test();
// console.log(nome); // Cannot read property 'nome' of null

// se "null", retorna "Test"
const test = () => null ;
const { nome = "Test" } = test() || {};
console.log(nome); // Test
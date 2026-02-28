// Pedro Moura de Oliveira, RA 823130837
// Atividade parte 2

let mesa = {
    nome: 'Mesa',
    cor: 'Branca',
    preco: 1000,
    estoque: 4
};

// A. Como acessar o nome do objeto?

console.log("O nome é", mesa.nome);

// B. Como acessar o preço usando colchetes?

console.log("O preço é", mesa["preco"]);

//C. Atualize o estoque para 80.

mesa.estoque = 80;

console.log("Agora tem", mesa.estoque, "mesas no estoque");

//D. Imprima todas as propriedades no console.

console.log(mesa);
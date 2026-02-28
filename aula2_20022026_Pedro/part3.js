// Pedro Moura de Oliveira, RA 823130837
// Atividade parte 3

let comida = [
    {nome: "Maçã", preco: 3, estoque: 20},

    {nome: "Salada", preco: 2, estoque: 30},

    {nome: "Pera", preco: 6, estoque: 10},

    {nome: "Banana", preco: 4, estoque: 25},

    {nome: "Manga", preco: 5, estoque: 17},

    {nome: "Mamão", preco: 8, estoque: 12},

    {nome: "Ovo", preco: 1, estoque: 50},

    {nome: "Tomate", preco: 7, estoque: 23},

    {nome: "Cebola", preco: 6, estoque: 16},

    {nome: "Goiaba", preco: 5, estoque: 33},

    {nome: "Laranja", preco: 9, estoque: 11},
];

// A. Qual é o preço do segundo objeto?

console.log("O preço do segundo objeto é", comida[1].preco);

// B. Qual é o nome do terceiro objeto?

console.log("O nome do terceiro obejeto é", comida[2].nome);

// C. Quantos itens existem no array?

console.log("Existem", comida.length, "no array");

// D. Imprima o nome de todos os objetos.

comida.forEach(c => console.log("Nome de obejeto:", c.nome));

// E. Some o total de estoque de todos os objetos.

let somaEstoque = 0;

for (let s = 0; s < comida.length; s++) {
  somaEstoque += comida[s].estoque;
};

console.log("Total de estoque de todos os objetos:", somaEstoque);

// F. Qual objeto possui maior estoque?

let maiorEstoque = comida[0];

for (let m = 1; m < comida.length; m++) {
  if (comida[m].estoque > maiorEstoque.estoque){
    maiorEstoque = comida[m];
  }
};

console.log("O objeto que tem o maior estoque é o", maiorEstoque);
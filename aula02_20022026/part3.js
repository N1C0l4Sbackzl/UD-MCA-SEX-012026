let produtos = [
    { nome: "Mouse", preco: 50, estoque: 30 },
    { nome: "Teclado", preco: 120, estoque: 20 },
    { nome: "Monitor", preco: 900, estoque: 15 },
    { nome: "Notebook", preco: 3500, estoque: 10 },
    { nome: "Celular", preco: 2000, estoque: 25 },
    { nome: "Impressora", preco: 800, estoque: 8 },
    { nome: "Câmera", preco: 1500, estoque: 12 },
    { nome: "Headset", preco: 300, estoque: 18 },
    { nome: "Tablet", preco: 1800, estoque: 22 },
    { nome: "Smartwatch", preco: 1000, estoque: 14 }
];

// A
console.log("Preço do segundo objeto:", produtos[1].preco);

// B
console.log("Nome do terceiro objeto:", produtos[2].nome);

// C
console.log("Quantidade de itens:", produtos.length);

// D
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome);
}

// E
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].estoque;
}
console.log("Total de estoque:", totalEstoque);

// F
let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].estoque > maiorEstoque.estoque) {
        maiorEstoque = produtos[i];
    }
}

console.log("Produto com maior estoque:", maiorEstoque);
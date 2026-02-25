let produto = {
    nome: "Notebook",
    cor: "Preto",
    preco: 3500,
    estoque: 50
};

// A
console.log(produto.nome);

// B
console.log(produto["preco"]);

// C
produto.estoque = 80;

// D
for (let chave in produto) {
    console.log(chave + ": " + produto[chave]);
}
// Parte 3 – Array de Objetos
let produtos = [
    { nome: 'Camiseta', preco: 50, estoque: 100 },
    { nome: 'Calça', preco: 120, estoque: 60 },
    { nome: 'Tênis', preco: 300, estoque: 40 },
    { nome: 'Boné', preco: 40, estoque: 80 },
    { nome: 'Jaqueta', preco: 200, estoque: 30 },
    { nome: 'Meia', preco: 20, estoque: 200 },
    { nome: 'Relógio', preco: 500, estoque: 25 },
    { nome: 'Óculos', preco: 150, estoque: 50 },
    { nome: 'Mochila', preco: 180, estoque: 35 },
    { nome: 'Cinto', preco: 70, estoque: 90 }
  ];
  
  // A. Preço do segundo objeto
  console.log("Preço do segundo objeto:", produtos[1].preco);
  
  // B. Nome do terceiro objeto
  console.log("Nome do terceiro objeto:", produtos[2].nome);
  
  // C. Quantos itens existem
  console.log("Total de itens:", produtos.length);
  
  // D. Imprimir o nome de todos os objetos
  for (let i = 0; i < produtos.length; i++) {
    console.log("Produto:", produtos[i].nome);
  }
  
  // E. Somar o total de estoque
  let totalEstoque = 0;
  for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].estoque;
  }
  console.log("Total de estoque:", totalEstoque);
  
  // F. Qual objeto possui maior estoque
  let maiorEstoque = produtos[0];
  for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].estoque > maiorEstoque.estoque) {
      maiorEstoque = produtos[i];
    }
  }
  console.log("Objeto com maior estoque:", maiorEstoque.nome, "-", maiorEstoque.estoque);
  
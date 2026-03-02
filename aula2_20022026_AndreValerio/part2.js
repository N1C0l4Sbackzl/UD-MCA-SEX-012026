// Parte 2 – Objeto
let produto = {
    nome: 'Notebook',
    cor: 'Prata',
    preco: 3500,
    estoque: 50
  };
  
  // A. Acessar o nome do objeto
  console.log("Nome:", produto.nome);
  
  // B. Acessar o preço usando colchetes
  console.log("Preço:", produto['preco']);
  
  // C. Atualizar o estoque para 80
  produto.estoque = 80;
  
  // D. Imprimir todas as propriedades
  for (let chave in produto) {
    console.log(chave + ":", produto[chave]);
  }
  
// Pedro Moura de Oliveira, RA 823130837
// Atividade parte 1

let comida = ['Macarrão', 'Arroz', 'Feijão', 'Maçã', 'Pera', 'Abacaxi', 'Frango', 'Pastel', 'Carne', 'Salada', 'Tomate', 'Banana', 'Laranja', 'Chocolate', 'Goiaba', 'Brocolis', 'Queijo', 'Pão', 'Presunto', 'Atum', 'Bacalhau'];

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?

let resultado = [0, 7, 11, 15, 18, 20].map(i => comida[i]);

console.log("Os elementos são:", resultado);


// B. Qual elemento está na penúltima e última posição?

console.log("Penúltimo:", comida[comida.length - 2]);
console.log("Último:", comida[comida.length - 1]);


// C. Quantos elementos existem no array?

console.log("Tem", comida.length, "itens no array.");


// D. Adicione um novo elemento ao final do array

comida.push("Ostra");

console.log(comida);


// E. Imprima todos os elementos usando um for

for (let i = 0; i < comida.length; i++){
    console.log(comida[i]);
};

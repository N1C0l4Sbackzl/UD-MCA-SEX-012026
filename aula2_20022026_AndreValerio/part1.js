// Parte 1 – Array Simples
let frutas = [
    'Maçã', 'Banana', 'Laranja', 'Uva', 'Pera',
    'Manga', 'Melancia', 'Abacaxi', 'Kiwi', 'Morango',
    'Cereja', 'Ameixa', 'Pêssego', 'Limão', 'Coco',
    'Goiaba', 'Maracujá', 'Framboesa', 'Mirtilo', 'Figo',
    'Tangerina'
  ];
  
  // A. Elementos em posições específicas
  console.log("Posição 0:", frutas[0]);
  console.log("Posição 7:", frutas[7]);
  console.log("Posição 11:", frutas[11]);
  console.log("Posição 15:", frutas[15]);
  console.log("Posição 18:", frutas[18]);
  console.log("Posição 20:", frutas[20]);
  
  // B. Penúltima e última posição
  console.log("Penúltima posição:", frutas[frutas.length - 2]);
  console.log("Última posição:", frutas[frutas.length - 1]);
  
  // C. Quantos elementos existem
  console.log("Total de elementos:", frutas.length);
  
  // D. Adicionar novo elemento
  frutas.push("Pitaya");
  console.log("Novo array:", frutas);
  
  // E. Imprimir todos os elementos usando for
  for (let i = 0; i < frutas.length; i++) {
    console.log("Elemento", i, ":", frutas[i]);
  }
  
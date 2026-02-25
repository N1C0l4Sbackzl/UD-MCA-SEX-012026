let frutas = [
    "Maçã", "Banana", "Uva", "Pera", "Manga",
    "Abacaxi", "Laranja", "Melancia", "Kiwi", "Morango",
    "Caju", "Limão", "Acerola", "Goiaba", "Mamão",
    "Coco", "Pitanga", "Graviola", "Maracujá", "Amora"
];

// A
console.log("Posição 0:", frutas[0]);
console.log("Posição 7:", frutas[7]);
console.log("Posição 11:", frutas[11]);
console.log("Posição 15:", frutas[15]);
console.log("Posição 18:", frutas[18]);
console.log("Posição 20:", frutas[20]);

// B
console.log("Penúltimo:", frutas[frutas.length - 2]);
console.log("Último:", frutas[frutas.length - 1]);

// C
console.log("Total de elementos:", frutas.length);

// D
frutas.push("Carambola");

// E
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
const frutas = ['Maçã', 'Banana', 'Uva']

console.log("=== FRUTAS INICIAIS ===");
console.log(frutas);

//Adicionando 3 novas frutas
frutas.push("Morango");
frutas.push("tangerina");
frutas.push("Abacaxi");

console.log("\n === APÓS ADICIONAR 3 FRUTAS ===");
console.log(frutas);

//removendo 2 frutas
frutas.splice(4, 5);

console.log("\n === APÓS REMOVER 2 FRUTAS ===");
console.log(frutas);
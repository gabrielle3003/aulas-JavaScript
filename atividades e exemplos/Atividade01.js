//====================================================
//           ETAPA 1 - Ficha do Item
//====================================================

// Declaração das variáveis
const nomeItem = "Arco e Flecha das Chamas";
const precoItem = 750;
const raridadeItem = "Lendário";
const quantidadeEstoque = 5;

// Exibição da Ficha do Item usando template strings
console.log("=== FICHA DO ITEM ===");

console.log(`
Nome: ${nomeItem}
Preço: R$ ${precoItem}
Raridade: ${raridadeItem}
Estoque: ${quantidadeEstoque}
`);


//====================================================
//           ETAPA 2 - Regras De Negócio
//====================================================

//1. Validação se precoItem é maior ou igual a 0

if(precoItem >= 0){
    console.log("Preço válido")
} else{
    console.log("Erro: O preço do Item não pode ser menor que 0.")
}

// 2. Classificação automática do Item por faixa de preço

let raridadeCalculada;

if (precoItem < 100) {
    raridadeCalculada = "Comum";
} else if (precoItem >= 100 < 500) {
    raridadeCalculada = "Raro";
} else {
    raridadeCalculada = "Lendário";
}

console.log(`Raridade Calculada por faixa de preço: ${raridadeCalculada}`);

// 3. Operador ternário para definir a variável emDestaque
const emDestaque = precoItem > 500 
     console.log(`Item em Destaque: ${emDestaque}`);

// 4. Operador lógico para verificar se o item está disponível para compra

const disponivelParaCompra = quantidadeEstoque > 0 && precoItem > 0;

if (disponivelParaCompra) {
    console.log("Item disponível para compra: Sim");
} else {
    console.log("Item disponível para compra: Não");
}

//====================================================
//      ETAPA 3 - Cadastro em Lote (Laço ou For)
//====================================================

// Cadastrando 5 itens 
for (let i = 0; i < 5; i++){

    //Relatório numerado
    console.log(`Item ${i + 1} cadastrado com sucesso!`);

    //Verifica se o Ìndice é par 
    if (i % 2 === 0){
        console.log("Item em promoção da semana!");
    }
}
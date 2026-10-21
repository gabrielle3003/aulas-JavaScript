const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];
  // Atividade 01
  console.log("\n    === ATIVIDADE 01 ===   ")

  const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);

  console.log(usuariosAtivos, '\n');


  // Atividade 02
  console.log("\n    === ATIVIDADE 02 ===   ")

  const produtos = [ { nome: 'Teclado', preco: 100 }, { nome: 'Mouse', preco: 50 } ];
  const Desconto = produtos.map(produto => ({
    ...produtos,
    preco: produto.preco * 10
 
}));


// Atividade 03 
console.log("\n    === ATIVIDADE 03 ===   ")

const carrinho = [25.50, 10.00, 100.00, 5.00];
 
const valorFinal = carrinho.reduce(
    (total,preco) => total + preco, 0
);
console.log(valorFinal.toFixed(2));

// Atividade 04
console.log("\n    === ATIVIDADE 04===   ")

const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

function limparLista(array) {
    return [...new Set(array)];
}
const unicos = limparLista(nomes)
// GABARITO COMPLETO - AULA 20 - MISSÃO DOM

//PASSO 2 - CONEXÃO 

console.log('Missão Iniciada');
console.log(document);

//PASSO 3 - POR ID (#)

const titulo = document.querySelector('#titulo');
titulo.textContent = 'Aula de DOM';
titulo.style.color = 'red';

// PASSO 4 - POR CLASSE (.)

const p1 = document.querySelector('.texto');
p1.style.fontWeight = 'bold';

const textos = document.querySelectorAll('.texto');
textos.forEach(p => p.style.color = 'green');

// PASSO 5 - POR TAGE COMBINAÇÃO

const caixa = document.querySelector('div');
caixa.style.border = '3px solid blue';
caixa.style.padding = '20px';

const campoNome = document.querySelector(
    '.container input[type="text"]'
);
campoNome.value = 'Maria';
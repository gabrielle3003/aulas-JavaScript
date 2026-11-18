console.log("Sobrevivente conectado ao DOM!");

const cabecalho = document.querySelector('header');
console.log(cabecalho);

const btnTema = document.querySelector('#btn-tema');
const boasVindas = document.querySelector('#boas-vindas');
const tituloSite = document.querySelector('header h1');
const listaBeneficios = document.querySelectorAll('ol li');

console.log(listaBeneficios.length);

const campoNome = document.querySelector('input[type="text"]');
const campoEmail = document.querySelector('input[type="email"]');

tituloSite.textContent = "The Walking Date";

const depoimento = document.querySelector('blockquote cite');

depoimento.innerHTML = "- <strong>Zezinho da Foice</strong>, Sobrevivente Nível 5.";

const textoBoasVindas = document.querySelector('#boas-vindas p').textContent;
console.log(textoBoasVindas);

document.querySelector('aside').style.borderColor = 'var(--cor-sangue)';
document.querySelector('aside').style.fontSize = '1.1rem';

const imagem = document.querySelector('#boas-vindas img');

console.log(imagem.getAttribute('alt'));

imagem.setAttribute('alt', 'Casal de zumbis apaixonados ao pôr do sol');

campoNome.value = "Sobrevivente Anônimo";

document.querySelector('tbody tr').classList.add('destaque-infectado');

const aviso = document.createElement('p');

aviso.textContent = " -- ALERTA DE HORDA: Encontros hoje apenas em zonas seguras!";
aviso.style.backgroundColor = 'var(--cor-sangue)';
aviso.style.textAlign = 'center';

document.querySelector('#barra-alerta').appendChild(aviso);

const novoBeneficio = document.createElement('li');

novoBeneficio.textContent = "Seguro contra perda de membros durante o primeiro encontro";

document.querySelector('#beneficios ol').appendChild(novoBeneficio);

document.querySelector('#fechar-alerta').addEventListener('click', function() {
    document.querySelector('#barra-alerta').remove();
});

const htmlRoot = document.documentElement;

btnTema.addEventListener('click', function() {

    if (htmlRoot.getAttribute('data-theme') === 'light') {
        htmlRoot.removeAttribute('data-theme');
        btnTema.textContent = "Modo Sobrevivência";
    } else {
        htmlRoot.setAttribute('data-theme', 'light');
        btnTema.textContent = "Modo Sombrio";
    }

});

let totalMatches = 0;

document.querySelector('.botao-match').addEventListener('click', function(event) {
    event.target.textContent = "Match Confirmado!";
    event.target.disabled = true;

    totalMatches++;

    document.querySelector('#placar-matches').textContent = `Matches: ${totalMatches}`;
});

document.querySelector('#btn-calcular').addEventListener('click', function() {

    const diasInfectado = Number(document.querySelector('#dias-infectado').value);

    const diasParceiro = Number(document.querySelector('#dias-parceiro').value);

    const resultado = document.querySelector('#resultado-quimica');

    if (diasInfectado <= 0 || diasParceiro <= 0 ||
        document.querySelector('#dias-infectado').value === "" ||
        document.querySelector('#dias-parceiro').value === "") {

        resultado.textContent = "Erro: Digite um número válido de dias, humano!";

    } else {

        const soma = diasInfectado + diasParceiro;

        resultado.textContent = "Nível de podridão combinada: " + soma + " dias! Compatibilidade alta!";
    }

});

campoNome.addEventListener('input', function() {
    console.log(campoNome.value);
});

campoNome.addEventListener('input', function() {
    document.querySelector('#preview-cracha').textContent =
        "Crachá de Sobrevivente: " + campoNome.value;
});

imagem.addEventListener('mouseover', function() {
    console.log("Cuidado! Não chegue muito perto da tela...");
});

document.querySelector('form').addEventListener('submit', function(event) {

    event.preventDefault();

    alert("Cadastro concluído, " + campoNome.value + "! Prepare sua melhor mordida.");

    campoNome.value = "";
    campoEmail.value = "";

    document.querySelector('#preview-cracha').textContent = "Crachá: ...";

});

document.addEventListener('keydown', function(event) {

    if (event.key === 'Escape') {

        const barraAlerta = document.querySelector('#barra-alerta');

        if (barraAlerta) {
            barraAlerta.remove();
        }

    }

});
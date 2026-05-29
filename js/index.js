// Array com as letras do alfabeto
const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Recupera a palavra e a dica do localStorage
const palavra = localStorage.getItem("palavra");
const dica = localStorage.getItem("dica");

// Variáveis para contar erros e acertos
let erros = 0;
let acertos = 0;

// Exibe a dica na tela
const hint = document.getElementById("subir");
hint.textContent = "Dica: " + dica;

// Laço para gerar os botões 
for (let i = 0; i < alfabeto.length; i++) {
    const letraButton = document.createElement("button");
    letraButton.textContent = alfabeto[i];
    letraButton.classList.add("key");
    letraButton.addEventListener("click", () => {
        const acertou = fazerTentativa(alfabeto[i]);
        console.log("Tentativa: " + alfabeto[i] + " - Acertou? " + acertou);
        if (acertou) {
            letraButton.classList.add("letra-acertada");
        } 
        else {
            letraButton.classList.add("letra-errou");
            contabilizarErro();
        }
            letraButton.disabled = true;

    });
    document.getElementById("keyboard").appendChild(letraButton);
}

// Laço para gerar os tracinhos das letras da palavra 
for (let i = 0; i < palavra.length; i++) {
    const espaco = document.createElement("div");
    espaco.classList.add("espaco-letra");
    const letra = document.createElement("span");
    letra.classList.add("letra");
    letra.textContent = palavra[i];
    espaco.appendChild(letra);
    document.getElementById("wordContainer").appendChild(espaco);
}
// Função para verificar se a letra existe na palavra e mostrar a letra caso exista
function fazerTentativa(letra) {
let acertou = false;
const letras = document.querySelectorAll(".letra");
    letras.forEach((letraElemento, index) => {
        if (normalizarLetra(letraElemento.textContent) === normalizarLetra(letra)) {
            letraElemento.style.visibility = "visible";
            acertou = true;
            contabilizarAcerto();
        }
    }); 
    return acertou;
}
// Função para normalizar as letras, removendo acentos e convertendo para maiúsculas
const normalizarLetra = (letra) => {
  return letra
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase();
};

// Função para contabilizar os erros e verificar se o jogo acabou
function contabilizarErro() {
    erros++;
    const forca = document.getElementById("hangmanImage");
    forca.src = `img/forca${erros}.png`;
    if (erros >= 6) {
        localStorage.setItem("resultado", "perdeu");
        window.location.href = "result.html";
    };
};

// Função para contabilizar os acertos e verificar se o jogo acabou
function contabilizarAcerto() {
    acertos++;
    if (acertos === palavra.length) {
        localStorage.setItem("resultado", "venceu");
        window.location.href = "result.html";
    }
}
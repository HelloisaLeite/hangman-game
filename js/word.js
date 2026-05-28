/* Isso vai armazenar a palavra e a dica e redirecionar para a página do jogo */
const startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", function() {
    const palavra = document.getElementById("palavraInput").value;
    const dica = document.getElementById("dicaInput").value;

    if (palavra === "" || dica === ""){
        alert("Por favor, preencha os campos: palavra e dica.");
        return;
    };

    localStorage.setItem("palavra", palavra.toUpperCase());
    localStorage.setItem("dica", dica);
    window.location.href = "index.html"; /* Ao clicar no botão, as entradas são salvas e o usuário vai para a página principal. */
});
// Recupera o resultado do jogo do localStorage
const resultado = localStorage.getItem("resultado");
if (resultado === "venceu") {
    document.getElementById("resultMessage").textContent = "Impressionante! Você conseguiu acertar a palavra antes que a forca fosse completada. Vitória mais do que merecida!";
    // chuva de confetes
    const duracao = 5000; // 5 segundos
    const fim = Date.now() + duracao;

    const intervalo = setInterval(() => {
        if (Date.now() > fim) {
            clearInterval(intervalo);
            return;
        }

        // Lado esquerdo
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 70,
            origin: { x: 0, y: 0.5 }
        });

        // Lado direito
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 70,
            origin: { x: 1, y: 0.5 }
        });
    }, 100);
}
else {
    document.getElementById("resultMessage").textContent = "Ops! Parece que a palavra era mais difícil do que parecia. Mas todo bom jogador da forca aprende com os erros. Tente outra vez!";
}


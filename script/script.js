import Tabuleiro from "./tabuleiro.js";

let numeroDeJogadores = 0;
let numeroDeDados = 0;
window.tabuleiro = null;

document.getElementById("quantidade-de-jogadores").addEventListener("change", () => {
    let numeroDeJogadores = document.getElementById("quantidade-de-jogadores").value;
    if (numeroDeJogadores > 1 && numeroDeJogadores <= 8) {
        numeroDeJogadores = parseInt(numeroDeJogadores);
    }
    else {
        alert("Quantidade de jogadores inválida. Deve ser entre 2 e 8.");
    }
}
);

document.getElementById("quantidade-de-dados").addEventListener("change", () => {
    let numeroDeDados = document.getElementById("quantidade-de-dados").value;
    if (numeroDeDados > 0 && numeroDeDados <= 2) {
        numeroDeDados = parseInt(numeroDeDados);
    }
    else {
        alert("Quantidade de dados inválida. Deve ser 1 ou 2.");
    }
}
);

document.getElementById("iniciar-jogo").addEventListener("click", () => {
   iniciarJogo();
}
);

function iniciarJogo() {
    numeroDeJogadores = document.getElementById("quantidade-de-jogadores").value;
    numeroDeDados = document.getElementById("quantidade-de-dados").value;
    if ((numeroDeDados > 0 && numeroDeDados <= 2) && (numeroDeJogadores > 1 && numeroDeJogadores <= 8)) {
        console.log("Iniciando jogo...");
        document.getElementById("antes-do-inicio").style.display = "none";
        document.getElementById("durante-jogo").style.display = "flex";
        document.getElementById("tabuleiro").style.display = "grid";
        window.tabuleiro = new Tabuleiro(numeroDeJogadores, numeroDeDados);
    }
    else {
        alert("Informações inválidas. Devem ser informadas pelo menos 2 jogadores e 1 dado.");
    }
}

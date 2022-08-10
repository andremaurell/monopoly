import Espaco from "./espaco.js";

export default class Especial extends Espaco {
    constructor(id, nome) {
        super(id, 'especial');
        this.nome = nome;
    }
    vaiPraCadeia() {
        let novaPosicao;
        if (espacoAtual.id == 31) {
            novaPosicao = espacoAtual.id - 20;
            window.tabuleiro.moverJogador(jogador, novaPosicao);
        }
    }
    ficaPreso() {
    let preso = 0;
    while (preso < 1) {
        
        preso++;
    }
    }
}


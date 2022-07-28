import Espaco from "./espaco.js";

export default class Transporte extends Espaco {
    constructor(id, nome, preco, aluguel) {
        super(id, 'transporte');
        this.nome = nome;
        this.preco = preco;
        this.aluguel = aluguel;
        this.dono = null;
        this.mostraNome();
        this.mostraPreco();
    }

    comprar(jogador) {
        this.dono = jogador;
    }

    pagar(jogador) {
        let valorAluguel = this.aluguel * (2 ** (this.dono.numeroDeTransportes - 1));
        jogador.dinheiro -= valorAluguel;
        this.dono.dinheiro += valorAluguel;
    }

}
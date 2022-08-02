import Espaco from "./espaco.js";

export default class Companhia extends Espaco {
    constructor(id, nome, preco) {
        super(id, 'companhia');
        this.nome = nome;
        this.preco = preco;
        this.mostraNome();
        this.mostraPreco();
    }

    comprar(jogador) {
        if (jogador.possuiSaldo(this.preco)) {
            jogador.sacar(this.preco);
            jogador.propriedades.push(this);
            this.dono = jogador;
        }
        else {
            alert("Você não possui dinheiro suficiente para comprar esta companhia!");
        }
    }

    pagar(jogador, valorDosDados) {
        let multiplicador = this.dono.numeroDeCompanhias > 1 ? 10 : 4;
        let valorAluguel = valorDosDados * multiplicador;
        jogador.sacar(valorAluguel);
        this.dono.depositar(valorAluguel);
    }
}
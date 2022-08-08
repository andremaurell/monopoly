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

    vender() {
        if (this.dono != null) {
            this.dono.depositar(this.preco);
            this.dono.propriedades.splice(this.dono.propriedades.indexOf(this), 1);
            this.dono = null;
        }
    }

    pagar(jogador, valorDosDados) {
        let multiplicador = this.dono.numeroDeCompanhias > 1 ? 10 : 4;
        let valorAluguel = valorDosDados * multiplicador;
        jogador.sacar(valorAluguel);
        this.dono.depositar(valorAluguel);
    }
}
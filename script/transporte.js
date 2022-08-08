import Espaco from "./espaco.js";

export default class Transporte extends Espaco {
    constructor(id, nome, preco, aluguel) {
        super(id, 'transporte');
        this.nome = nome;
        this.preco = preco;
        this.aluguel = aluguel;
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
            alert("Você não possui dinheiro suficiente para comprar este transporte!");
        }
    }

    vender() {
        if (this.dono != null) {
            this.dono.depositar(this.preco);
            this.dono.propriedades.splice(this.dono.propriedades.indexOf(this), 1);
            this.dono = null;
        }
    }

    pagar(jogador) {
        let valorAluguel = this.aluguel * (2 ** (this.dono.numeroDeTransportes - 1));
        jogador.sacar(valorAluguel);
        this.dono.depositar(valorAluguel);
    }
    
}
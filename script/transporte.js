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
}
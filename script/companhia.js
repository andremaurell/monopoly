import Espaco from "./espaco.js";

export default class Companhia extends Espaco {
    constructor(id, nome, preco) {
        super(id, 'companhia');
        this.nome = nome;
        this.preco = preco;
        this.dono = null;
        this.mostraNome();
        this.mostraPreco();
    }
}
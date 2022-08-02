import Espaco from "./espaco.js";

export default class Imposto extends Espaco {
    constructor(id, nome, preco) {
        super(id, 'imposto');
        this.nome = nome;
        this.preco = preco;
        this.mostraNome();
        this.mostraPreco();
    }
}
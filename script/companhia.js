import Espaco from "./espaco.js";

export default class Companhia extends Espaco {
    constructor(id, nome, preco) {
        super(id, 'normal');
        this.preco = preco;
        this.dono = null;
    }
}
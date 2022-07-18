import Espaco from "./espaco.js";

export default class Transporte extends Espaco {
    constructor(id, nome, preco, aluguel) {
        super(id, 'normal');
        this.nome = nome;
        this.preco = preco;
        this.aluguel = aluguel;
        this.dono = null;
    }
}
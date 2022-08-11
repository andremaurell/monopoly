import Espaco from "./espaco.js";

export default class Especial extends Espaco {
    constructor(id, nome) {
        super(id, 'especial');
        this.nome = nome;
    }
}


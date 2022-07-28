import Espaco from "./espaco.js";

export default class Sorte extends Espaco {
    constructor(id) {
        super(id, 'sorte');
        this.nome = 'Sorte';
        this.mostraNome();
    }
}
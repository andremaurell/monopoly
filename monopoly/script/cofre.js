import Espaco from "./espaco.js";

export default class Cofre extends Espaco {
    constructor(id) {
        super(id, 'cofre');
        this.nome = 'Cofre';
        this.mostraNome();
    }
}
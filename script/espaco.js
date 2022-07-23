export default class Espaco {
    constructor(id, tipo) {
        this.id = id;
        this.tipo = tipo;
        this.jogadores = []; // Array de jogadores que estão no espaço
        this.elemento = document.getElementById(id);
    }
}
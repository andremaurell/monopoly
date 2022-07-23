export default class Jogador {
    constructor(id, nome, cor) {
        this.nome = nome;
        this.cor = cor;
        this.dinheiro = 1500;
        this.propriedades = [];
        this.cartas = [];
        this.numero = 0;
        this.id = id;
        this.espaco = null;
        this.criaElemento();
    }

    criaElemento() {
        this.elemento = document.createElement('div');
        this.elemento.classList.add('jogador');
        this.elemento.id = 'jogador' + this.id;
        this.elemento.style.backgroundColor = this.cor;
    }
}
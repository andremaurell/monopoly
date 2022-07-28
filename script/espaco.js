export default class Espaco {
    constructor(id, tipo) {
        this.id = id;
        this.tipo = tipo;
        this.jogadores = []; // Array de jogadores que estão no espaço
        this.elemento = document.getElementById(id);
    }

    mostraNome() {
        let nome = document.createElement('p');
        nome.classList.add(`nome-${this.tipo}`);
        nome.innerHTML = this.nome;
        this.elemento.getElementsByClassName('informacoes')[0].appendChild(nome);
    }

    mostraPreco() {
        let preco = document.createElement('p');
        preco.classList.add(`preco-${this.tipo}`);
        preco.innerHTML = `R$ ${this.preco}`;
        this.elemento.getElementsByClassName('informacoes')[0].appendChild(preco);
    }
}
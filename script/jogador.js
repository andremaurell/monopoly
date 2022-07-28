export default class Jogador {
    constructor(id, nome, cor) {
        this.nome = nome;
        this.cor = cor;
        this.dinheiro = 1500;
        this.propriedades = [];
        this.cartas = [];
        this.numero = 0;
        this.numeroDeTransportes = 0;
        this.id = id;
        this.espaco = null;
        this.criaElemento();
        this.cartao = null;
        this.criaCartao();
    }

    criaElemento() {
        this.elemento = document.createElement('div');
        this.elemento.classList.add('jogador');
        this.elemento.id = 'jogador' + this.id;
        this.elemento.style.backgroundColor = this.cor;
    }

    criaCartao() {
        this.cartao = document.createElement('div');
        this.cartao.classList.add('cartao-jogador');
        this.cartao.id = 'cartao-jogador' + this.id;
        
        let nome = document.createElement('div');
        nome.classList.add('cartao-nome-jogador');
        nome.style.backgroundColor = this.cor;
        let nomeParagrafo = document.createElement('p');
        nomeParagrafo.innerHTML = this.nome;
        nome.appendChild(nomeParagrafo);
        
        let dinheiro = document.createElement('div');
        dinheiro.classList.add('cartao-dinheiro-jogador');
        let dinheiroParagrafo = document.createElement('p');
        dinheiroParagrafo.innerHTML = this.dinheiro;
        dinheiro.appendChild(dinheiroParagrafo);

        this.cartao.appendChild(nome);
        this.cartao.appendChild(dinheiro);
    }
}
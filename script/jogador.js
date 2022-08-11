export default class Jogador {
    constructor(id, nome, cor) {
        this.nome = nome;
        this.cor = cor;
        this.dinheiro = 1500;
        this.propriedades = [];
        this.cartas = [];
        this.numero = 0;
        this.numeroDeTransportes = 0;
        this.numeroDeCompanhias = 0;
        this.preso = false;
        this.vezesSemJogar = 0;
        this.id = id;
        this.espaco = null;
        this.criaElemento();
        this.cartao = null;
        this.criaCartao();
    }

    estaPreso() {
        return this.preso;
    }

    prender() {
        this.mover(11);
        this.preso = true;
    }

    liberar() {
        this.preso = false;
    }

    podeJogar() {
        return !this.preso && this.vezesSemJogar == 0;
    }

    mover(posicao) {
        if (this.podeJogar()) {
            window.tabuleiro.moverJogador(this, posicao);
        } else if (this.vezesSemJogar > 0 || this.preso) {
            alert('Você não pode mover, pois está preso ou não pode jogar.');
            this.vezesSemJogar--;
            if (this.vezesSemJogar == 0) {
                this.liberar();
            }
        }
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

    // esconderCartao(){

    // }

    sacar(valor) {
        this.dinheiro -= valor;
        this.atualizaCartao();
    }

    depositar(valor) {
        this.dinheiro += valor;
        this.atualizaCartao();
    }

    transferir(valor, jogador) {
        this.sacar(valor);
        jogador.depositar(valor);
    }

    atualizaCartao() {
        let dinheiroParagrafo = this.cartao.getElementsByClassName('cartao-dinheiro-jogador')[0].getElementsByTagName('p')[0];
        dinheiroParagrafo.innerHTML = this.dinheiro;
    }

    possuiSaldo(valor) {
        return this.dinheiro >= valor;
    }

    possuiCidadesDaCor(cor) {
        let quantidadeTotal = (cor == 'marrom' || cor == 'azul') ? 2 : 3; 
        return this.propriedades.filter(propriedade => propriedade.cor == cor).length == quantidadeTotal;
    }
}
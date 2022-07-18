import Espaco from "./espaco.js";

export default class Cidade extends Espaco {
    constructor(id, nome, estado, cor, preco, precoPorCasa, aluguel, aluguelUmaCasa, aluguelDuasCasas, aluguelTresCasas, aluguelQuatroCasas, aluguelHotel, hipoteca) {
        super(id, 'Cidade');
        this.nome = nome;
        this.estado = estado;
        this.cor = cor;
        this.preco = preco;
        this.precoPorCasa = precoPorCasa;
        this.aluguel = aluguel;
        this.aluguelUmaCasa = aluguelUmaCasa;
        this.aluguelDuasCasas = aluguelDuasCasas;
        this.aluguelTresCasas = aluguelTresCasas;
        this.aluguelQuatroCasas = aluguelQuatroCasas;
        this.aluguelHotel = aluguelHotel;
        this.hipoteca = hipoteca;
        this.dono = null;
        this.casas = 0;
        this.hotel = false;
        this.mostraNome();
        this.mostraPreco();
    }

    mostraNome() {
        let nome = document.createElement('p');
        nome.classList.add('nome-cidade');
        nome.innerHTML = this.nome;
        this.elemento.getElementsByClassName('informacoes')[0].appendChild(nome);
    }

    mostraPreco() {
        let preco = document.createElement('p');
        preco.classList.add('preco-cidade');
        preco.innerHTML = `R$ ${this.preco}`;
        this.elemento.getElementsByClassName('informacoes')[0].appendChild(preco);
    }
}
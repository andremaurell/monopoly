import Espaco from "./espaco.js";

export default class Cidade extends Espaco {
    // static coresCidades = {}

    constructor(id, nome, cor, preco, precoPorCasa, aluguel, aluguelUmaCasa, aluguelDuasCasas, aluguelTresCasas, aluguelQuatroCasas, aluguelHotel, hipoteca) {
        super(id, 'cidade');
        this.nome = nome;
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
        this.casas = 0;
        this.hotel = false;
        this.mostraNome();
        this.mostraPreco();
        // if (Cidade.coresCidades[this.cor] == undefined) {
        //     Cidade.coresCidades[this.cor] = Array();
        // }
        // Cidade.coresCidades[this.cor].push(this);
    }

    comprar(jogador) {
        if (jogador.possuiSaldo(this.preco)) {
            jogador.sacar(this.preco);
            jogador.propriedades.push(this);
            this.dono = jogador;
        }
        else {
            alert("Você não possui dinheiro suficiente para comprar esta cidade!");
        }
    }

    vender() {
        if (this.casas == 0 && this.hotel == false) {
            this.dono.depositar(this.preco);
            this.dono.propriedades.splice(this.dono.propriedades.indexOf(this), 1);
            this.dono = null;
        }
        else {
            alert("Você não pode vender uma cidade com casas ou hotel!");
        }
    }

    pagar(jogador) {
        if (this.casas == 0) {
            jogador.sacar(this.aluguel);
            this.dono.depositar(this.aluguel);
        } else if (this.casas == 1) {
            jogador.sacar(this.aluguelUmaCasa);
            this.dono.depositar(this.aluguelUmaCasa);
        } else if (this.casas == 2) {
            jogador.sacar(this.aluguelDuasCasas);
            this.dono.depositar(this.aluguelDuasCasas);
        }
        else if (this.casas == 3) {
            jogador.sacar(this.aluguelTresCasas);
            this.dono.depositar(this.aluguelTresCasas);
        }
        else if (this.casas == 4) {
            jogador.sacar(this.aluguelQuatroCasas);
            this.dono.depositar(this.aluguelQuatroCasas);
        }
        else if (this.hotel) {
            jogador.sacar(this.aluguelHotel);
            this.dono.depositar(this.aluguelHotel);
        }
    }

    construirCasa() {
        if (this.casas < 4) {
            if (this.dono.possuiSaldo(this.precoPorCasa)) {
                this.dono.sacar(this.precoPorCasa);
                let predios = document.getElementById(this.id).getElementsByClassName('predios')[0];
                let casa = document.createElement('div');
                casa.className = 'casa';
                predios.appendChild(casa);
                this.casas++;
            }
            else {
                alert("Você não possui dinheiro suficiente para construir uma casa!");
            }
        } else {
            alert("Você não pode construir mais casas nesta cidade!");
        }
    }

    construir() {
        if (this.casas < 4) {
            this.construirCasa();
        }
        else {
            this.construirHotel();
        }
    }

    vendeCasa() {
        if (this.casas > 0 && this.hotel == false) {
            this.dono.depositar(this.precoPorCasa);
            let predios = document.getElementById(this.id).getElementsByClassName('predios')[0];
            let casa = predios.lastChild;
            predios.removeChild(casa);
            this.casas--;
        }
        else if (this.casas > 0 && this.hotel == true) {
            alert("Você não pode vender uma casa sem antes vender seu hotel!");
        }
        else {
            alert("Você não possui casas para vender!");
        }
    }

    // podeConstruirCasa(cor) {
    //     if         
    // }

    construirHotel() {
        if (this.casas == 4) {
            if (this.dono.possuiSaldo(this.precoPorCasa)) {
                this.dono.sacar(this.precoPorCasa);
                let predios = document.getElementById(this.id).getElementsByClassName('predios')[0];
                for (let i = 0; i < 4; i++) {
                    let casa = predios.lastChild;
                    predios.removeChild(casa);
                }
                let hotel = document.createElement('div');
                hotel.className = 'hotel';
                predios.appendChild(hotel);
                this.hotel = true;
            }
            else {
                alert("Você não possui dinheiro suficiente para construir um hotel!");
            }
        } else {
            alert("Você não pode construir um hotel sem construir todas as casas!");
        }
    }

    vendeHotel() {
        if (this.hotel) {
            this.dono.depositar(this.precoPorCasa);
            let predios = document.getElementById(this.id).getElementsByClassName('predios')[0];
            let hotel = predios.lastChild;
            predios.removeChild(hotel);
            for (let i = 0; i < 4; i++) {
                let casa = document.createElement('div');
                casa.className = 'casa';
                predios.appendChild(casa);
            }
            this.hotel = false;
        }
        else {
            alert("Você não possui hotel para vender!");
        }
    }

    desconstruir() {
        if (this.casas > 0) {
            this.vendeCasa();
        } else if (this.hotel) {
            this.vendeHotel();
        } else {
            alert("Você não possui casas ou hotel para desconstruir!");
        }
    }

}
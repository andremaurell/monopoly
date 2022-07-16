window.dados = document.getElementsByClassName("dado");
window.dado = 0;
//cria o dado
function roll(){
    window.dados.forEach(dado => {
        dado.classList.add('shake');
    });
    setTimeout(function(){
        window.dados.forEach(dado => {
            dado.classList.remove('shake');
        });
        let dieOneValue = Math.floor(Math.random()*6) + 1;
        let dieTwoValue = Math.floor(Math.random()*6) + 1;
        document.getElementById("dado-1").src = `monopoly/img/dice-0${dieOneValue}.svg`;
        document.getElementById("dado-2").src = `monopoly/img/dice-0${dieTwoValue}.svg`; 
        let somaDosDados = ((dieOneValue) + (dieTwoValue));
        document.getElementById("total").innerHTML = somaDosDados; //declaro a variavel dado pra utilizar ela no codigo inteiro
        window.dado = somaDosDados;
        return somaDosDados;
    },
    1000
    );
}
class Jogador {
    constructor(id, nome, cor) {
        this.nome = nome;
        this.cor = cor;
        this.dinheiro = 1500;
        this.propriedades = [];
        this.cartas = [];
        this.numero = 0;
        this.elemento = document.createElement('div');
        this.elemento.classList.add('jogador');
        this.id = 'jogador' + id;
        this.elemento.id = 'jogador' + id;
        this.elemento.style.backgroundColor = cor;
        this.espaco = null;
    }

    adicionaJogadorNoEspaco(espaco) {
        this.espaco = espaco;
        this.espaco.elemento.appendChild(this.elemento);
    }

    removeJogadorDoEspaco(espaco) {
        this.espaco.elemento.removeChild(this.elemento);
        this.espaco = null;
    }

    mover(espaco) {
        this.removeJogadorDoEspaco(this.espaco);
        this.adicionaJogadorNoEspaco(espaco);
        this.espaco = espaco;
    }

}

class Tabuleiro {
    static cores = ['red', 'blue', 'yellow', 'green', 'white', 'black', 'deeppink', 'purple'];
    constructor(numeroDeJogadores, numeroDeDados) {
        this.numeroDeJogadores = numeroDeJogadores;
        this.numeroDeDados = numeroDeDados;
        this.jogadores = [];
        this.espacos = {};
        this.espacos['1'] = new Especial(1, 'Início');
        this.espacos['2'] = new Cidade(2, 'Rio Grande', 'marrom', 60, 50, 2, 10, 30, 90, 160, 250, 30);
        this.espacos['3'] = new Cofre(3);
        this.espacos['4'] = new Cidade(4, 'Pelotas', 'marrom', 60, 50, 4, 20, 60, 180, 320, 450, 30);
        this.espacos['5'] = new Imposto(5, 'Imposto de Renda', 200);
        this.espacos['6'] = new Transporte(6, 'Aviação', 200);
        this.espacos['7'] = new Cidade(7, 'Porto Alegre', 'azul-claro', 100, 50, 6, 30, 90, 270, 400, 550, 50);
        this.espacos['8'] = new Sorte(8);
        this.espacos['9'] = new Cidade(9, 'São Paulo', 'azul-claro', 100, 50, 6, 30, 90, 270, 400, 550, 50);
        this.espacos['10'] = new Cidade(10, 'Brasília', 'azul-claro', 120, 50, 8, 40, 100, 300, 450, 600, 60);
        this.espacos['11'] = new Especial(11, 'Cadeia', 200);
        this.espacos['12'] = new Cidade(12, 'Rio de Janeiro', 'rosa', 140, 100, 10, 50, 150, 450, 625, 750, 70);
        this.espacos['13'] = new Companhia(13, 'Elétrica', 150);
        this.espacos['14'] = new Cidade(14, 'São Gonçalo', 'rosa', 140, 100, 10, 50, 150, 450, 625, 750, 70);
        this.espacos['15'] = new Cidade(15, 'Salvador', 'rosa', 160, 100, 12, 60, 180, 500, 700, 900, 80);
        this.espacos['16'] = new Transporte(16, 'Navio', 200);
        this.espacos['17'] = new Cidade(17, 'Vitória', 'laranja', 180, 100, 14, 70, 200, 550, 750, 950, 90);
        this.espacos['18'] = new Cofre(18);
        this.espacos['19'] = new Cidade(19, 'Belo Horizonte', 'laranja', 180, 100, 14, 70, 200, 550, 750, 950, 90);
        this.espacos['20'] = new Cidade(20, 'Goiânia', 'laranja', 200, 100, 16, 80, 220, 600, 800, 1000, 100);
        this.espacos['21'] = new Especial(21, 'Estacionamento');
        this.espacos['22'] = new Cidade(22, 'Palmas', 'vermelho', 220, 150, 18, 90, 250, 700, 875, 1050, 110);
        this.espacos['23'] = new Sorte(23);
        this.espacos['24'] = new Cidade(24, 'Porto Velho', 'vermelho', 220, 150, 18, 90, 250, 700, 875, 1050, 110);
        this.espacos['25'] = new Cidade(25, 'Maceió', 'vermelho', 240, 150, 20, 100, 300, 750, 925, 1100, 120);
        this.espacos['26'] = new Transporte(26, 'Trem', 200);
        this.espacos['27'] = new Cidade(27, 'Rio Branco', 'amarelo', 260, 150, 22, 110, 330, 800, 975, 1150, 130);
        this.espacos['28'] = new Cidade(28, 'Campo Grande', 'amarelo', 260, 150, 22, 110, 330, 800, 975, 1150, 130);
        this.espacos['29'] = new Companhia(29, 'Saneamento', 150);
        this.espacos['30'] = new Cidade(30, 'Cuiabá', 'amarelo', 280, 150, 24, 120, 360, 850, 1025, 1200, 140);
        this.espacos['31'] = new Especial(31, 'Vaipracadeia');
        this.espacos['32'] = new Cidade(32, 'Curitiba', 'verde', 300, 200, 26, 130, 390, 900, 1100, 1275, 150);
        this.espacos['33'] = new Cidade(33, 'Manaus', 'verde', 300, 200, 26, 130, 390, 900, 1100, 1275, 150);
        this.espacos['34'] = new Cofre(34);
        this.espacos['35'] = new Cidade(35, 'Florianópolis', 'verde', 320, 200, 28, 150, 450, 1000, 1200, 1400, 160);
        this.espacos['36'] = new Transporte(36, 'Espacial', 200);
        this.espacos['37'] = new Sorte(37);
        this.espacos['38'] = new Cidade(38, 'Natal', 'azul-escuro', 350, 200, 35, 175, 500, 1100, 1300, 1500, 175);
        this.espacos['39'] = new Imposto(39, 'Taxa de Luxúria', 200);
        this.espacos['40'] = new Cidade(40, 'Ijuí', 'azul-escuro', 400, 200, 50, 200, 600, 1400, 1700, 2000, 200);
        this.iniciarJogo();
    }

    iniciarJogo() {
        for (let i = 0; i < this.numeroDeJogadores; i++) {
            this.jogadores.push(new Jogador(i + 1, `Jogador${i+1}`, Tabuleiro.cores[i]));
        }
        this.jogadores.forEach(jogador => {
            jogador.adicionaJogadorNoEspaco(this.espacos['1']);
        }
        );

        for (let i = 0; i < 10; i++) {
            this.jogadores.forEach(jogador => {
                this.moverJogador(jogador, dado);
            }
            );
        }
    }
    moverJogador(jogador, dado) {
        console.log(dado);
        let posicao = jogador.espaco.id + dado;
        if (posicao >= 40) {
            posicao -= 40;
        }
        let novoEspaco = this.espacos[posicao];
        jogador.mover(novoEspaco);
    }
}

class Espaco {
    constructor(id, tipo) {
        this.id = id;
        this.tipo = tipo;
        this.jogadores = []; // Array de jogadores que estão no espaço
        this.elemento = document.getElementById(id);
    }

    addJogador(jogador) {
        this.jogadores.push(jogador);
        this.elemento.appendChild(jogador.elemento);
    }

    removeJogador(jogador) {
        this.jogadores.splice(this.jogadores.indexOf(jogador), 1);
        this.elemento.removeChild(jogador.elemento);
    }

    update() {
        this.jogadores.forEach(jogador => {
            jogador.update();
        }
        );
    }
}

class Cidade extends Espaco {
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
        this.elemento.appendChild(nome);
    }

    mostraPreco() {
        let preco = document.createElement('p');
        preco.classList.add('preco-cidade');
        preco.innerHTML = `R$ ${this.preco}`;
        this.elemento.appendChild(preco);
    }
}

class Companhia extends Espaco {
    constructor(id, nome, preco) {
        super(id, 'normal');
        this.preco = preco;
        this.dono = null;
    }
}

class Transporte extends Espaco {
    constructor(id, nome, preco, aluguel) {
        super(id, 'normal');
        this.nome = nome;
        this.preco = preco;
        this.aluguel = aluguel;
        this.dono = null;
    }
}

class Sorte extends Espaco {
    constructor(id) {
        super(id, 'normal');
    }
}

class Cofre extends Espaco {
    constructor(id, nome) {
        super(id, 'normal');
    }
}

class Especial extends Espaco {
    constructor(id, nome) {
        super(id, 'especial');
        this.nome = nome;
    }
}

class Imposto extends Espaco {
    constructor(id, nome, preco) {
        super(id, 'normal');
        this.nome = nome;
        this.preco = preco;
    }
}

let tabuleiro = new Tabuleiro(8, 2);

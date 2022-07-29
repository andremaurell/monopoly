import Jogador from "./jogador.js";
import Dado from "./dado.js";
import Companhia from "./companhia.js";
import Transporte from "./transporte.js";
import Sorte from "./sorte.js";
import Cofre from "./cofre.js";
import Especial from "./especial.js";
import Imposto from "./imposto.js";
import Cidade from "./cidade.js";


export default class Tabuleiro {
    static cores = ['red', 'blue', 'yellow', 'green', 'white', 'black', 'deeppink', 'purple'];
    constructor(numeroDeJogadores, numeroDeDados) {
        this.numeroDeJogadores = numeroDeJogadores;
        this.numeroDeDados = numeroDeDados;
        this.jogadores = [];
        this.dados = [];
        this.vez = 0;
        this.cont = 0;
        this.painel = document.getElementById('quem-joga');
        this.espacos = {};
        this.preencheEspacos();
        this.criaJogadores();
        this.criaDados();
        document.getElementById("iniciar-jogo").style.display = "none";
        document.getElementById("roll").style.display = "block";
        this.vezDeQuem();

        document.getElementById("roll").addEventListener("click",
            () => {
                document.getElementById("total").style.display = "none";
                document.getElementById("roll").style.display = "none";
                let valorDosDados = 0;
                this.dados = [];
                for (let i = 0; i < this.numeroDeDados; i++) {
                    let valorDado = Math.floor(Math.random() * 6) + 1;
                    this.dados.push(valorDado);
                    valorDosDados += valorDado;
                }
                Dado.rolar(this.dados);
                setTimeout(() => {
                    document.getElementById("total").innerHTML = valorDosDados;
                    let espacoAtual = this.quemJoga.espaco;
                    let novaPosicao = espacoAtual.id + valorDosDados;
                    if (novaPosicao > 40) {
                        novaPosicao -= 40;
                    }
                    let novoEspaco = this.espacos[novaPosicao];
                    novoEspaco.elemento.getElementsByClassName('jogadores')[0].appendChild(this.quemJoga.elemento);
                    this.quemJoga.espaco = novoEspaco;
                    console.log(this.quemJoga, novaPosicao);
                    this.opcoesDeAcao(this.quemJoga, valorDosDados);
                    document.getElementById("total").style.display = "block";
                    document.getElementById("roll").style.display = "block";
                    this.vezDeQuem();
                }, 1800);
            }
        );
    }

    opcoesDeAcao(jogador, valorDosDados) {
        let espacoAtual = jogador.espaco;
        console.log(espacoAtual)
        if (espacoAtual.tipo == 'transporte') {
            let transporte = espacoAtual;
            if (transporte.dono == null) {
                document.getElementById("comprar").style.display = "block";
                document.getElementById("comprar").addEventListener("click",
                    function comprar() {
                        transporte.comprar(jogador);
                        document.getElementById("comprar").style.display = "none";
                        
                        document.getElementById("comprar").removeEventListener("click", comprar);
                    }
                );
            } else if (transporte.dono != jogador) {
                document.getElementById("pagar").style.display = "block";
                document.getElementById("pagar").addEventListener("click",
                    function pagar() {
                        transporte.pagar(jogador);
                        document.getElementById("pagar").style.display = "none";
                        
                        document.getElementById("pagar").removeEventListener("click", pagar);
                    }
                );
            }
        } else if (espacoAtual.tipo == 'companhia') {
            let companhia = espacoAtual;
            if (companhia.dono == null) {
                document.getElementById("comprar").style.display = "block";
                document.getElementById("comprar").addEventListener("click",
                    function comprar() {
                        companhia.comprar(jogador);
                        document.getElementById("comprar").style.display = "none";
                        
                        document.getElementById("comprar").removeEventListener("click", comprar);
                    }
                );
            } else if (companhia.dono != jogador) {
                document.getElementById("pagar").style.display = "block";
                document.getElementById("pagar").addEventListener("click",
                    function pagar() {
                        companhia.pagar(jogador, valorDosDados);
                        document.getElementById("pagar").style.display = "none";
                        
                        document.getElementById("pagar").removeEventListener("click", pagar);
                    }
                );
            }
        } else if (espacoAtual.tipo == 'sorte') {
            let sorte = espacoAtual;
            // sorte.acao(jogador);
        } else if (espacoAtual.tipo == 'cofre') {
            let cofre = espacoAtual;
            // cofre.acao(jogador);
        } else if (espacoAtual.tipo == 'especial') {
            let especial = espacoAtual;
            // especial.acao(jogador);
        } else if (espacoAtual.tipo == 'imposto') {
            let imposto = espacoAtual;
            jogador.sacar(imposto.preco);
        } else if (espacoAtual.tipo == 'cidade') {
            let cidade = espacoAtual;
            if (cidade.dono == null) {
                document.getElementById("comprar").style.display = "block";
                document.getElementById("comprar").addEventListener("click",
                    function comprar() {
                        cidade.comprar(jogador);
                        document.getElementById("comprar").style.display = "none";
                        
                        document.getElementById("comprar").removeEventListener("click", comprar);
                    }
                );
            } else if (cidade.dono != jogador) {
                document.getElementById("pagar").style.display = "block";
                document.getElementById("pagar").addEventListener("click",
                    function pagar() {
                        cidade.pagar(jogador);
                        document.getElementById("pagar").style.display = "none";
                        
                        document.getElementById("pagar").removeEventListener("click", pagar);
                    }
                );
            } else if (cidade.dono == jogador) {
                // Se jogador possui todas cidades da mesma cor de cidade, poderá construir casas nela
                if (jogador.possuiCidadesDaCor(cidade.cor)) {
                    document.getElementById("construir").style.display = "block";
                    document.getElementById("construir").addEventListener("click",
                        function construir() {
                            cidade.construir(jogador);
                            document.getElementById("construir").style.display = "none";
                            
                            document.getElementById("construir").removeEventListener("click", construir);
                        }
                    );
                }
            }
        }
    }

    criaDados() {
        Dado.criarDados(this.numeroDeDados);
    }

    criaJogadores() {
        let painel = document.getElementById('durante-jogo');
        let cartoesJogadores = document.createElement('div');
        cartoesJogadores.id = 'cartoes-jogadores';
        painel.appendChild(cartoesJogadores);
        for (let i = 0; i < this.numeroDeJogadores; i++) {
            let novoJogador = new Jogador(i + 1, `Jogador${i + 1}`, Tabuleiro.cores[i])
            this.espacos['1'].elemento.getElementsByClassName('jogadores')[0].appendChild(novoJogador.elemento);
            cartoesJogadores.appendChild(novoJogador.cartao);
            novoJogador.espaco = this.espacos['1'];
            this.jogadores.push(novoJogador);
        }
    }

    iniciarJogo() {
        this.vezDeQuem();
    }

    vezDeQuem() {
        this.quemJoga = this.jogadores[this.vez];
        this.painel.innerHTML = `${this.quemJoga.nome}`;
        this.vez++;
        if (this.vez == this.numeroDeJogadores) {
            this.vez = 0;
        }
    }

    moverJogador(jogador, dado) {
        let posicao = jogador.espaco.id + dado;
        if (posicao >= 40) {
            posicao -= 40;
        }
        let novoEspaco = this.espacos[posicao];
        jogador.mover(novoEspaco);
    }

    preencheEspacos() {
        this.espacos['1'] = new Especial(1, 'Início');
        this.espacos['2'] = new Cidade(2, 'Rio Grande', 'marrom', 60, 50, 2, 10, 30, 90, 160, 250, 30);
        this.espacos['3'] = new Cofre(3);
        this.espacos['4'] = new Cidade(4, 'Pelotas', 'marrom', 60, 50, 4, 20, 60, 180, 320, 450, 30);
        this.espacos['5'] = new Imposto(5, 'Imposto de Renda', 200);
        this.espacos['6'] = new Transporte(6, 'Trem', 200, 25);
        this.espacos['7'] = new Cidade(7, 'Porto Alegre', 'azul-claro', 100, 50, 6, 30, 90, 270, 400, 550, 50);
        this.espacos['8'] = new Sorte(8);
        this.espacos['9'] = new Cidade(9, 'São Paulo', 'azul-claro', 100, 50, 6, 30, 90, 270, 400, 550, 50);
        this.espacos['10'] = new Cidade(10, 'Brasília', 'azul-claro', 120, 50, 8, 40, 100, 300, 450, 600, 60);
        this.espacos['11'] = new Especial(11, 'Cadeia', 200);
        this.espacos['12'] = new Cidade(12, 'Rio de Janeiro', 'rosa', 140, 100, 10, 50, 150, 450, 625, 750, 70);
        this.espacos['13'] = new Companhia(13, 'Elétrica', 150);
        this.espacos['14'] = new Cidade(14, 'São Gonçalo', 'rosa', 140, 100, 10, 50, 150, 450, 625, 750, 70);
        this.espacos['15'] = new Cidade(15, 'Salvador', 'rosa', 160, 100, 12, 60, 180, 500, 700, 900, 80);
        this.espacos['16'] = new Transporte(16, 'Avião', 200, 25);
        this.espacos['17'] = new Cidade(17, 'Vitória', 'laranja', 180, 100, 14, 70, 200, 550, 750, 950, 90);
        this.espacos['18'] = new Cofre(18);
        this.espacos['19'] = new Cidade(19, 'Belo Horizonte', 'laranja', 180, 100, 14, 70, 200, 550, 750, 950, 90);
        this.espacos['20'] = new Cidade(20, 'Goiânia', 'laranja', 200, 100, 16, 80, 220, 600, 800, 1000, 100);
        this.espacos['21'] = new Especial(21, 'Estacionamento');
        this.espacos['22'] = new Cidade(22, 'Palmas', 'vermelho', 220, 150, 18, 90, 250, 700, 875, 1050, 110);
        this.espacos['23'] = new Sorte(23);
        this.espacos['24'] = new Cidade(24, 'Porto Velho', 'vermelho', 220, 150, 18, 90, 250, 700, 875, 1050, 110);
        this.espacos['25'] = new Cidade(25, 'Maceió', 'vermelho', 240, 150, 20, 100, 300, 750, 925, 1100, 120);
        this.espacos['26'] = new Transporte(26, 'Navio', 200, 25);
        this.espacos['27'] = new Cidade(27, 'Rio Branco', 'amarelo', 260, 150, 22, 110, 330, 800, 975, 1150, 130);
        this.espacos['28'] = new Cidade(28, 'Campo Grande', 'amarelo', 260, 150, 22, 110, 330, 800, 975, 1150, 130);
        this.espacos['29'] = new Companhia(29, 'Eólica', 150);
        this.espacos['30'] = new Cidade(30, 'Cuiabá', 'amarelo', 280, 150, 24, 120, 360, 850, 1025, 1200, 140);
        this.espacos['31'] = new Especial(31, 'Vaipracadeia');
        this.espacos['32'] = new Cidade(32, 'Curitiba', 'verde', 300, 200, 26, 130, 390, 900, 1100, 1275, 150);
        this.espacos['33'] = new Cidade(33, 'Manaus', 'verde', 300, 200, 26, 130, 390, 900, 1100, 1275, 150);
        this.espacos['34'] = new Cofre(34);
        this.espacos['35'] = new Cidade(35, 'Florianópolis', 'verde', 320, 200, 28, 150, 450, 1000, 1200, 1400, 160);
        this.espacos['36'] = new Transporte(36, 'Espaçonave', 200, 25);
        this.espacos['37'] = new Sorte(37);
        this.espacos['38'] = new Cidade(38, 'Natal', 'azul-escuro', 350, 200, 35, 175, 500, 1100, 1300, 1500, 175);
        this.espacos['39'] = new Imposto(39, 'Taxa de Riqueza', 200);
        this.espacos['40'] = new Cidade(40, 'Ijuí', 'azul-escuro', 400, 200, 50, 200, 600, 1400, 1700, 2000, 200);
    }
}
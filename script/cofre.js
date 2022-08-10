import Espaco from "./espaco.js";

export default class Cofre extends Espaco {
    static embaralharCartas() {
        for (let i = Cofre.cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [Cofre.cartas[i], Cofre.cartas[j]] = [Cofre.cartas[j], Cofre.cartas[i]];
        }
    }

    static contador = 0;

    static sorteiaCarta(jogador, valorDosDados) {
        if (Cofre.contador == Cofre.cartas.length) {
            Cofre.contador = 0;
        }
        let carta = Cofre.cartas[Cofre.contador];
        //let carta = Cofre.cartas[prompt('Digite o número da carta:')-1];
        let mostraCarta = document.createElement('div');
        mostraCarta.className = 'carta';
        let cartaConteudo = document.createElement('div');
        cartaConteudo.className = 'carta-conteudo';
        cartaConteudo.innerHTML = 'Cofre';
        let cartaTexto = document.createElement('p');
        cartaTexto.className = 'carta-texto';
        cartaTexto.innerHTML = carta.descricao;
        cartaConteudo.appendChild(cartaTexto);
        let botao = window.tabuleiro.criaBotao('Ok', cartaConteudo);
        mostraCarta.appendChild(cartaConteudo);
        document.getElementById('cartas').appendChild(mostraCarta);
        botao.addEventListener('click', () => {
            mostraCarta.remove();
            if (carta.valor == null && carta.posicao != null) {
                let novaPosicao = carta.posicao;
                if (novaPosicao < 0) {
                    novaPosicao = jogador.espaco.id + novaPosicao;
                }
                let passouPeloPontoDePartida = (novaPosicao < jogador.espaco.id) && (novaPosicao > 1);
                if (passouPeloPontoDePartida) {
                    jogador.depositar(200);
                }
                window.tabuleiro.moverJogador(jogador, novaPosicao);
                window.tabuleiro.opcoesDeAcao(jogador, valorDosDados);
            } else if (carta.valor != null && carta.posicao == null) {
                jogador.depositar(carta.valor);
                window.tabuleiro.mostraBotao(window.tabuleiro.botaoRolarDados);
            } else if (carta.valor == null && carta.posicao == null) {
                console.log("nada")
                window.tabuleiro.mostraBotao(window.tabuleiro.botaoRolarDados);
            }
            Cofre.contador++;
        });
    }
    static cartas = [
        {
            id: 1,
            valor: null,
            posicao: 1,
            descricao: "Avance para o ponto de partida e receba R$ 200."
        },
        {
            id: 2,
            valor: 200,
            posicao: null,
            descricao: "Erro do banco em seu favor. Receba R$ 200."
        },
        {
            id: 3,
            valor: -50,
            posicao: null,
            descricao: "Consulta médica. Pague R$ 50."
        },
        {
            id: 4,
            valor: 50,
            posicao: null,
            descricao: "Da sua venda de ações você recebe R$ 50."
        },
        {
            id: 5,
            valor: null,
            posicao: null,
            descricao: "Saia da cadeia gratuitamente. Esta carta pode ser guardada até ser usada ou vendida."
        },
        {
            id: 6,
            valor: null,
            posicao: 31,
            descricao: "Vá para a cadeia imediatamente! Se passar pelo ponto de partida, não receberá os R$ 200."
        },
        {
            id: 7,
            valor: 100,
            posicao: null,
            descricao: "Seu seguro de férias venceu. Receba R$ 100."
        },
        {
            id: 8,
            valor: 20,
            posicao: null,
            descricao: "Receba R$ 20 da sua restituição do imposto de renda."
        },
        {
            id: 9,
            valor: null,
            posicao: null,
            descricao: "É seu aniversário! Receba R$ 10 de cada jogador."
        },
        {
            id: 10,
            valor: 100,
            posicao: null,
            descricao: "Seu seguro de vida venceu. Receba R$ 100."
        },
        {
            id: 11,
            valor: -100,
            posicao: null,
            descricao: "Pague as despesas do hospital de R$ 100."
        },
        {
            id: 12,
            valor: -50,
            posicao: null,
            descricao: "Pague as despesas da escola de R$ 50."
        },
        {
            id: 13,
            valor: 25,
            posicao: null,
            descricao: "Receba R$ 25 de taxa de consultoria."
        },
        {
            id: 14,
            valor: null,
            posicao: null,
            descricao: "Pague imposto de todas as suas propriedades. Pague R$ 40 por cada casa e R$ 115 por cada hotel que possuir."
        },
        {
            id: 15,
            valor: 10,
            posicao: null,
            descricao: "Você ganhou o segundo lugar em um concurso de beleza. Receba R$ 10."
        },
        {
            id: 16,
            valor: 100,
            posicao: null,
            descricao: "Você herdou R$ 100."
        }
    ];


    constructor(id) {
        super(id, 'cofre');
        this.nome = 'Cofre';
        this.mostraNome();
    }
}
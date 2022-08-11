import Espaco from "./espaco.js";

export default class Sorte extends Espaco {
    static embaralharCartas() {
        for (let i = Sorte.cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [Sorte.cartas[i], Sorte.cartas[j]] = [Sorte.cartas[j], Sorte.cartas[i]];
        }
    }

    static contador = 0;

    static sorteiaCarta(jogador, valorDosDados) {
        if (Sorte.contador == Sorte.cartas.length) {
            Sorte.contador = 0;
        }
        let carta = Sorte.cartas[Sorte.contador];
        //let carta = Sorte.cartas[prompt('Digite o número da carta:')-1];
        let mostraCarta = document.createElement('div');
        mostraCarta.className = 'carta';
        let cartaConteudo = document.createElement('div');
        cartaConteudo.className = 'carta-conteudo';
        cartaConteudo.innerHTML = 'Sorte';
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
            Sorte.contador++;
        });
    }

    static cartas = [
        {
            id: 1,
            valor: null,
            posicao: 40,
            descricao: `Avance para São Paulo.`
        },
        {
            id: 2,
            valor: null,
            posicao: 1,
            descricao: "Avance para o ponto de partida e receba R$ 200."
        },
        {
            id: 3,
            valor: null,
            posicao: 25,
            descricao: `Avance para Goiânia. Se passar pelo ponto de partida, receba R$ 200.`
        },
        {
            id: 4,
            valor: null,
            posicao: 12,
            descricao: "Avance para Manaus. Se passar pelo ponto de partida, receba R$ 200."
        },
        {
            id: 5,
            valor: null,
            posicao: 6,
            descricao: "Avance até o transporte de trem. Se passar pelo ponto de partida, receba R$ 200."
        },
        {
            id: 6,
            valor: -15,
            posicao: null,
            descricao: "Pague R$ 15 para mandar lavar o carro."
        },
        {
            id: 7,
            valor: null,
            posicao: 31,
            descricao: "A comissão de fraude da receita federal pegou você no pulo. Vá diretamente para a cadeia. Se passar pelo ponto de partida, não receberá R$ 200."
        },
        {
            id: 8,
            valor: null,
            posicao: -3,
            descricao: "Volte 3 espaços."
        },
        {
            id: 9,
            valor: 50,
            posicao: null,
            descricao: "Sua loja de bicicletas deu lucro! Receba R$ 50."
        },
        {
            id: 10,
            valor: 150,
            posicao: null,
            descricao: "Receba R$ 150 de lucro da sua empresa de software."
        }
    ];

    constructor(id) {
        super(id, 'sorte');
        this.nome = 'Sorte';
        this.mostraNome();
    }
}
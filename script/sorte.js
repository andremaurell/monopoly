import Espaco from "./espaco.js";

export default class Sorte extends Espaco {

    static sorteiaCarta() {
        let carta = Math.floor(Math.random() * Sorte.cartas.length);
        return Sorte.cartas[carta];
    }

    static cartas = [
        {
            id: 1,
            preco: 100,
            aluguel: 50,
            descricao: "Avance para Ijuí."
        },
        {
            id: 2,
            preco: 100,
            aluguel: 50,
            descricao: "Avance para o ponto de partida e receba R$ 200."
        },
        {
            id: 3,
            preco: 100,
            aluguel: 50,
            descricao: "Avance para Maceió. Se passar pelo ponto de partida, receba R$ 200."
        },
        {
            id: 4,
            preco: 100,
            aluguel: 50,
            descricao: "Avance para o Rio de Janeiro. Se passar pelo ponto de partida, receba R$ 200."
        },
        {
            id: 5,
            preco: 100,
            aluguel: 50,
            descricao: "Avance até o transporte mais próximo. Se o transporte não tiver proprietário, você poderá comprá-lo do banco. Se tiver proprietário, pague o dobro do aluguel estipulado na carta Título de Posse. Se passar pelo ponto de partida, receba R$ 200."
        },
        {
            id: 6,
            preco: 100,
            aluguel: 50,
            descricao: "Avance até o transporte mais próximo. Se o transporte não tiver proprietário, você poderá comprá-lo do banco. Se tiver proprietário, pague o dobro do aluguel estipulado na carta Título de Posse. Se passar pelo ponto de partida, receba R$ 200."
        },
        {
            id: 7,
            preco: 100,
            aluguel: 50,
            descricao: "Avance até o transporte de trem. Se passar pelo ponto de partida, receba R$ 200."
        },
        {
            id: 8,
            preco: 100,
            aluguel: 50,
            descricao: "Pague R$ 15 para mandar lavar o carro."
        },
        {
            id: 9,
            preco: 100,
            aluguel: 50,
            descricao: "Hora de redecorar as suas casas. Pague R$ 25 para cada casa e R$ 100 para cada hotel."
        },
        {
            id: 10,
            preco: 100,
            aluguel: 50,
            descricao: "A comissão de fraude da receita federal pegou você no pulo. Vá diretamente para a cadeia. Se passar pelo ponto de partida, não receberá R$ 200."
        },
        {
            id: 11,
            preco: 100,
            aluguel: 50,
            descricao: "Volte 3 espaços."
        },
        {
            id: 12,
            preco: 100,
            aluguel: 50,
            descricao: "Saia da cadeia de graça! Esta carta pode ser guardada até ser usada ou vendida."
        },
        {
            id: 13,
            preco: 100,
            aluguel: 50,
            descricao: "Sua loja de bicicletas deu lucro! Receba R$ 50."
        },
        {
            id: 14,
            preco: 100,
            aluguel: 50,
            descricao: "Avance até a companhia mais próxima. Se a companhia não tiver proprietário, você poderá comprá-la do banco. Se tiver proprietário, lance os dados e pague ao proprietário mil vezes o número dos dados. Se passar pelo ponto de partida, receba R$ 200."
        },
        {
            id: 15,
            preco: 100,
            aluguel: 50,
            descricao: "Receba R$ 150 de lucro da sua empresa de software."
        },
        {
            id: 16,
            preco: 100,
            aluguel: 50,
            descricao: "Pague R$ 50 para cada jogador para experimentar comida de todo o país."
        }
    ];

    constructor(id) {
        super(id, 'sorte');
        this.nome = 'Sorte';
        this.mostraNome();
    }
}
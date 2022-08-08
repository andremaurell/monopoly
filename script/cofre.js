import Espaco from "./espaco.js";

export default class Cofre extends Espaco {

    static cartas = [
        {
            id: 1,
            preco: 100,
            aluguel: 50,
            descricao: "Avance para o ponto de partida e receba R$ 200."
        },
        {
            id: 2,
            preco: 100,
            aluguel: 50,
            descricao: "Erro do banco em seu favor. Receba R$ 200."
        },
        {
            id: 3,
            preco: 100,
            aluguel: 50,
            descricao: "Consulta médica. Pague R$ 50."
        },
        {
            id: 4,
            preco: 100,
            aluguel: 50,
            descricao: "Da sua venda de ações você recebe R$ 50."
        },
        {
            id: 5,
            preco: 100,
            aluguel: 50,
            descricao: "Saia da cadeia gratuitamente. Esta carta pode ser guardada até ser usada ou vendida."
        },
        {
            id: 6,
            preco: 100,
            aluguel: 50,
            descricao: "Vá para a cadeia imediatamente! Se passar pelo ponto de partida, não receberá os R$ 200."
        },
        {
            id: 7,
            preco: 100,
            aluguel: 50,
            descricao: "Seu seguro de férias venceu. Receba R$ 100."
        },
        {
            id: 8,
            preco: 100,
            aluguel: 50,
            descricao: "Receba R$ 20 da sua restituição do imposto de renda."
        },
        {
            id: 9,
            preco: 100,
            aluguel: 50,
            descricao: "É seu aniversário! Receba R$ 10 de cada jogador."
        },
        {
            id: 10,
            preco: 100,
            aluguel: 50,
            descricao: "Seu seguro de vida venceu. Receba R$ 100."
        },
        {
            id: 11,
            preco: 100,
            aluguel: 50,
            descricao: "Pague as despesas do hospital de R$ 100."
        },
        {
            id: 12,
            preco: 100,
            aluguel: 50,
            descricao: "Pague as despesas da escola de R$ 50."
        },
        {
            id: 13,
            preco: 100,
            aluguel: 50,
            descricao: "Receba R$ 25 de taxa de consultoria."
        },
        {
            id: 14,
            preco: 100,
            aluguel: 50,
            descricao: "Pague imposto de todas as suas propriedades. Pague R$ 40 por cada casa e R$ 115 por cada hotel que possuir."
        },
        {
            id: 15,
            preco: 100,
            aluguel: 50,
            descricao: "Você ganhou o segundo lugar em um concurso de beleza. Receba R$ 10."
        },
        {
            id: 16,
            preco: 100,
            aluguel: 50,
            descricao: "Você herdou R$ 100."
        }
    ];


    constructor(id) {
        super(id, 'cofre');
        this.nome = 'Cofre';
        this.mostraNome();
    }
}
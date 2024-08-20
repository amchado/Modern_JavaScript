//challenger 1
'use strict';

/* DESAFIO #1
De volta às duas equipes de ginástica, os Golfinhos e os Coalas! Há uma nova disciplina de ginástica, que funciona de forma diferente.

Cada equipe compete 3 vezes e então a média das 3 pontuações é calculada (portanto, uma pontuação média por equipe).

Uma equipe só vence se tiver pelo menos o dobro da pontuação média da outra equipe. Caso contrário, nenhuma equipe vence!


Suas tarefas:

Crie uma função de seta calcAverage para calcular a média de 3 pontuações. Esta função deve ter três parâmetros e retornar um único número (a pontuação média).

Crie duas novas variáveis ​​— scoreDolphins e scoreKoalas, e atribua a elas o valor retornado da função calcAverage (você precisará chamar esta função e passar pontuações como argumentos).

Crie uma função checkWinner que toma como parâmetro a pontuação média de cada equipe (avgDolphins e avgKoalas), e então registra o vencedor no console, junto com os pontos de vitória, conforme regra acima. Exemplo: vitória dos Koalas (30 vs. 13) (use avgDolphins e avgKoalas em vez de valores codificados).

Use a função checkWinner para determinar o vencedor para DADOS 1 e DADOS 2.

Ignore os empates desta vez. Em vez disso, registre Nenhuma equipe ganha... no console se não houver vencedor.



DADOS DE TESTE 1: Golfinhos pontuaram 44, 23 e 71. Coalas pontuaram 65, 54 e 49.

DADOS DE TESTE 2: Golfinhos pontuaram 85, 54 e 41. Coalas pontuaram 23, 34 e 27. */

const calcAverage = function(score1, score2, score3){
    return (score1 + score2 + score3) / 3
}

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 27)

const checkWinner = function(avgDolphins, avgKoalas){
    if((avgDolphins / 2) > avgKoalas){
        console.log(`Dholphins win (${scoreDolphins} vs ${scoreKoalas})`)
    }else if((avgKoalas / 2) > avgDolphins){
        console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`)
    }else{
        console.log('No team wins...')
    }
}

const data1 = checkWinner(scoreDolphins, scoreKoalas)






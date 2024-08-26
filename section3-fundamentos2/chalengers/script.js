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

// const calcAverage = function(score1, score2, score3){
//     return (score1 + score2 + score3) / 3
// }

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 27)

// const checkWinner = function(avgDolphins, avgKoalas){
//     if((avgDolphins / 2) > avgKoalas){
//         console.log(`Dholphins win (${scoreDolphins} vs ${scoreKoalas})`)
//     }else if((avgKoalas / 2) > avgDolphins){
//         console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`)
//     }else{
//         console.log('No team wins...')
//     }
// }

// const data1 = checkWinner(scoreDolphins, scoreKoalas)




//challenger 2
/* Steven quer que você melhore sua calculadora de gorjetas, usando as mesmas regras de antes – gorjeta de 15% da conta se o valor da conta estiver entre 50 e 300, e se o valor for diferente, a gorjeta será de 20%.

Suas tarefas:

Escreva uma função calcTip que receba qualquer valor de conta como entrada e retorne a gorjeta correspondente, calculada com base nas regras acima (você pode conferir o código do primeiro desafio da calculadora de gorjetas se precisar). Use o tipo de função que você mais gosta. Teste a função usando um valor de fatura de 100.

E agora vamos usar arrays! Portanto, crie um array chamado bills contendo os dados de teste abaixo.

Crie um array chamado dicas contendo o valor da gorjeta de cada nota, calculado a partir da função que você criou anteriormente.

BÔNUS: Crie um array de totais contendo os valores totais, ou seja, conta + gorjeta.

DADOS DE TESTE: 125, 555 e 44. */




// function calcTip(bill){
//     return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20
// }
    
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills, tips, totals)






//      Challenger 3

/* Vamos melhorar ainda mais a calculadora de gorjetas do Steven, desta vez usando loops!

Suas tarefas:

Crie uma matriz chamada contas contendo todos os 10 valores de contas de teste.

Crie matrizes vazias para as gorjetas e os totais (gorjetas e totais)

Use a função calcTip que escrevemos antes (incluída no código inicial) para calcular gorjetas e valores totais (fatura + gorjeta) para cada valor de nota na matriz de contas. Use um loop for para realizar os 10 cálculos!



DADOS DE TESTE: 22, 295, 176, 440, 37, 105, 10, 1100, 86 e 52.



BÔNUS:

Escreva uma função calcAverage que recebe um array chamado arr como argumento. Esta função calcula a média de todos os números no array fornecido. Este é um desafio DIFÍCIL (não fizemos isso antes)! Veja como resolver isso se você quiser:

Primeiro, você precisará somar todos os valores do array. Para fazer a adição, comece criando uma soma variável que comece em 0. Em seguida, faça um loop sobre o array usando um loop for. Em cada iteração, adicione o valor atual à variável sum. Dessa forma, ao final do loop, você terá todos os valores somados.

Para calcular a média, divida a soma calculada anteriormente pelo comprimento do array (porque esse é o número de elementos).

Chame a função com o array de totais. 
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []
const total = []

for(let i = 0; i < bills.length ; i++){
    tips.push(calcTip(bills[i]))
    
    total.push(bills[i] + tips[i])
}

console.log(tips)
console.log(total)

// bonus

const calcAverage = function(arr){
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum / arr.length
}

console.log(calcAverage([3,5,7]))
console.log(calcAverage(total))

//Desafio 1

/* Escreva uma função chamada descriptionCountry que aceita três parâmetros: país, população e capitalCity. Com base nesta entrada, a função retorna uma string com este formato: 'A Finlândia tem 6 milhões de habitantes e sua capital é Helsinque'.

Chame esta função 3 vezes, com dados de entrada para 3 países diferentes. Armazene os valores retornados em 3 variáveis ​​diferentes e registre-os no console. */

// function discricaoPais (pais, populacao, capital){
//     const descricao = `A(O) ${pais} tem ${populacao} milhões de habitantes e sua capital é ${capital}
//     `
//     return descricao
// }

// const brasil = discricaoPais('Brasil',220, 'Brasilia' )
// console.log(brasil)

// const inglaterra = discricaoPais('Inglaterra', 60, 'Londres')
// console.log(inglaterra)

// const madagascar = discricaoPais('Madasgascar', 29,1, 'Antananarivo')
// console.log(madagascar)




//Desafio 2

/* A população mundial é de 7.900 milhões de pessoas. Crie uma declaração de função chamada percentageOfWorld1 que recebe um valor populacional e retorna a porcentagem da população mundial que a população dada representa. Por exemplo, a China tem 1.441 milhões de pessoas, ou seja, cerca de 18,2% da população mundial.

Para calcular a porcentagem, divida o valor da população fornecido por 7.900 e depois multiplique por 100.

Chame percentOfWorld1 para 3 populações de países de sua escolha, armazene os resultados em variáveis ​​e registre-os no console.

Crie uma expressão de função que faça exatamente a mesma coisa, chamada percentageOfWolrd2, e também a chame com populações de 3 países (podem ser as mesmas populações). */

// function porcentagemDoMundo(pais){
//     return `A porcentagem é de ${(pais / 7.900) * 100}%`
// }

// const china = porcentagemDoMundo(1.441)
// console.log(china)
// const brasil = porcentagemDoMundo(0.215)
// console.log(brasil)
// const india = porcentagemDoMundo(1.417 )
// console.log(india)

// const porcentagem = function(pais){
//     return `A porcentagem é de ${(pais / 7.900) * 100}%`
// }
// const china2 = porcentagemDoMundo(1.441)
// console.log(china2)
// const brasil2 = porcentagemDoMundo(0.215)
// console.log(brasil2)
// const india2 = porcentagemDoMundo(1.417 )
// console.log(india2)



// Desafio 4

/* Recrie a última atribuição, mas desta vez crie uma função de seta chamada percentageOfWorld3. */

// const porcentagem = pais => `A porcentagem é de ${(pais / 7.900) * 100}`

// const pais1 = porcentagem(1441)
// console.log(pais1)
// const pais2 = porcentagem(0.215)
// console.log(pais2)
// const pais3 = porcentagem(1417 )
// console.log(pais3)




//Desafio 5
/* Crie uma função chamada descrevaPopulation. Use o tipo de função que você mais gosta. Esta função recebe dois argumentos: país e população, e retorna strings como esta: 'A China tem 1.441 milhões de pessoas, o que representa cerca de 18,2% do mundo'.

Para calcular a porcentagem, descriptionPopulation chama percentageOfWorld1 que você criou anteriormente.

Ligue para descriptionPopulation com dados de 3 países de sua escolha. */

const porcentagem = function(pais){
    return (pais / 7.900) * 100
}

const descrevaPais = function(pais, populacao){
    
    const popuPorc = porcentagem(populacao)

    return `A(O) ${pais} tem ${populacao} milhões de pessoas, o que represente certa de ${popuPorc}% da população do mundo`
}

const pais1 = descrevaPais('Brasil', 0.215)
const pais2 = descrevaPais('China', 1.441)
const pais3 = descrevaPais('India', 1.447)
console.log(pais1, pais2, pais3)
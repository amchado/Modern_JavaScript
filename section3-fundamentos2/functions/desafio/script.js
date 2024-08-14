/* Escreva uma função chamada descriptionCountry que aceita três parâmetros: país, população e capitalCity. Com base nesta entrada, a função retorna uma string com este formato: 'A Finlândia tem 6 milhões de habitantes e sua capital é Helsinque'.

Chame esta função 3 vezes, com dados de entrada para 3 países diferentes. Armazene os valores retornados em 3 variáveis ​​diferentes e registre-os no console. */

function discricaoPais (pais, populacao, capital){
    const descricao = `A(O) ${pais} tem ${populacao} milhões de habitantes e sua capital é ${capital}
    `
    return descricao
}

const brasil = discricaoPais('Brasil',220, 'Brasilia' )
console.log(brasil)

const inglaterra = discricaoPais('Inglaterra', 60, 'Londres')
console.log(inglaterra)

const madagascar = discricaoPais('Madasgascar', 29,1, 'Antananarivo')
console.log(madagascar)
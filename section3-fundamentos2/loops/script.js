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

// const porcentagem = function(pais){
//     return (pais / 7.900) * 100
// }

// const descrevaPais = function(pais, populacao){
    
//     const popuPorc = porcentagem(populacao)

//     return `A(O) ${pais} tem ${populacao} milhões de pessoas, o que represente certa de ${popuPorc}% da população do mundo`
// }

// const pais1 = descrevaPais('Brasil', 0.215)
// const pais2 = descrevaPais('China', 1.441)
// const pais3 = descrevaPais('India', 1.447)
// console.log(pais1, pais2, pais3)

//Aula 6
//Arrays

// const friends = ['Levy', 'Lipe', 'Lucas']

// const anos = new Array(2002, 2004, 2000)

// console.log(friends, anos )

//Aula 8 
//Objetos

// const eu = {
//     primeiroNome: 'Arthur',
//     sobreNome: 'Machado',
//     idade: 2024 - 2002, 
//     profissao: 'web developer',
//     amigos:['Levy', 'Lipe', 'Lucas']
// }

// console.log(eu)
// console.log(eu.primeiroNome)
// console.log(eu.sobreNome)


// const keyname = 'Nome'
// console.log(eu['primeiro' + keyname])
// console.log(eu['sobre' + keyname])

// const sobre = prompt('Sobre o que voce quer saber? escolha entre, primeiroNome, sobreNome, idade, prosissao e amigos')
// console.log(sobre)
// console.log(eu[sobre])

// console.log(`${eu.primeiroNome} tenho ${eu.amigos.length} amigos, mas o ${eu.amigos[0]} é o meu melhor amigo`)

//Aula 10 

// const eu = {
//     primeiroNome: 'Arthur',
//     sobreNome: 'Machado',
//     anoDeNascimento: 2002,
//     carteiraDeMotorista: true, 
//     profissao: 'web developer',
//     amigos:['Levy', 'Lipe', 'Lucas'],
//     calcage: function(){
//         this.idade = 2024 - this.anoDeNascimento;
//         return this.idade
//     }
 
// }

// console.log(eu.calcage())
// console.log(eu.idade)

// challenger

// const eu = {
//     primeiroNome: 'Arthur',
//     sobreNome: 'Machado',
//     anoDeNascimento: 2002,
//     carteiraDeMotorista: true, 
//     profissao: 'web developer',
//     amigos:['Levy', 'Lipe', 'Lucas'],
//     calcage: function(){
//         this.idade = 2024 - this.anoDeNascimento;
//         return this.idade
//          },

//     getSummary:function(){
//         return `${this.primeiroNome} tem ${this.calcage()} anos e é ${this.profissao}, e ${(this.carteiraDeMotorista === true)? `possui carteira de motorista` : `não possui carteira de motorista` } e tem ${this.amigos.length} amigos`
//     }     
// }

// console.log(eu.calcage())
// console.log(eu.idade)

// console.log(eu.getSummary())


//              LOOPS

//Aula 11


// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Você fez ${rep} repetições`)
// }




//Aula 12

// const arthur = [
//     'Arthur',
//     'Lucas',
//     22,
//     ['Levy', 'Lipe', 'Lucas'],
//     'Casado',
//     true,
//     'Tricolor'
// ]

// const tipos = []

// for(let i = 0; i < arthur.length ; i++){
//     console.log(arthur[i], typeof arthur[i])


//     //preenchendo um array vazio
//     tipos[i] = typeof arthur[i]
// }

// console.log(tipos)



// const anos =[2002, 2008, 1980, 1965]
// const idade = []

// for(i = 0; i < anos.length ; i++){
//     idade.push(2024 - anos[i])
// }

// console.log(idade)


// Break 
// for(let i = 0; i < arthur.length ; i++){
//     if(typeof arthur[i] === 'number')break

//     console.log(arthur[i], typeof arthur[i])
// }





//Aula 14
// Looping backwards and loops in loops

// const arthur = [
//     'Arthur',
//     'Lucas',
//     22,
//     ['Levy', 'Lipe', 'Lucas'],
//     'Casado',
//     true,
//     'Tricolor'
// ]

// for(let i = arthur.length - 1; i >= 0 ; i--){
//     console.log(i, arthur[i])
// }

// for(let exercicio = 1; exercicio < 4; exercicio++){
//     console.log(`----- Começando o exercicio ${exercicio}`)

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`começando a repetição ${rep} 🏋️‍♂️`)
//     }
// }




//Aula 15
// The while loop

// let rep = 1

// while(rep <= 10){
//     console.log(`executando o exercicio ${rep}`)
//     rep++
// }

let dado = Math.trunc(Math.random() * 6) + 1 ;

while(dado !== 6){
    console.log(`voce rolou ${dado}`)
    dado = Math.trunc(Math.random() * 6) + 1 ;
    if(dado === 6){
        console.log(`o Loop foi finalizado`)
    }
}
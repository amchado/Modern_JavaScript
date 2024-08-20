// Aula 1 

/* Para tornar o codigo mais seguro, usar o " 'use strict ' " para tornar o codigo mais seguro. ele torna o erro mais visivel e proibe alguns argumentos errados */
'use strict';

// let temCarteira = false;
// const passouNoTeste = true;

// if(passouNoTeste) temCarteira = true;
// if(temCarteira) console.log('Ok. você está autorizado a dirigir :D');

//Aula 2 

// function login() {
//     console.log('O login esta certo')
// }

// login()

// function fazedorDeSucos(maca,laranja) {
//     const suco = `O suco contêm ${maca} maçães e ${laranja} laranjas.`
//     return suco
// }


// const sucoMisto = fazedorDeSucos(3 , 2)
// console.log(sucoMisto)

// const sucoDeMaca = fazedorDeSucos(5, 0)
// console.log(sucoDeMaca)




// Aula 3 

// function idade(anoDeNascimento) {
//     return 2035 - anoDeNascimento
// }

// const idade1 = idade(2002)
// console.log(idade1)

// const idade2 = function(anoDeNascimento) {
//     return 2035 - anoDeNascimento
// }
// const idade22 = idade2(2002)
// console.log(idade22)




//Aula 4 
// Arrow functions

// const idade = anoDeNascimento => 2024 - anoDeNascimento; 
// const idade1 = idade(22)
// console.log(idade1)

// const anosRestantes = (anoDeNascimento, nome) => {
//     const idade = 2024 - anoDeNascimento
//     const aposentadoria = 65 - idade
//     return `${nome} faltam ${aposentadoria} para a sua aposentadoria. ` 
// }

// const pessoa1 = anosRestantes(2002, 'Arthur')
// console.log(pessoa1)

//Aula 5
//function calling other function

function cortadorDeFrutas(fruta){
    return fruta * 4
}

function fazedorDeSucos(maca,laranja) {
    const pedacoDeMaca = cortadorDeFrutas(maca)
    const pedacoDeLaranja = cortadorDeFrutas(laranja) 

    const suco = `O suco contêm ${pedacoDeMaca} pedaços de maçães e ${pedacoDeLaranja} pedaços de laranjas.`
    return suco
 }

 const suco1 = fazedorDeSucos(2,3)
 console.log(suco1)



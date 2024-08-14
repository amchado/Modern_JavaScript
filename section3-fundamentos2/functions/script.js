// Aula 1 

/* Para tornar o codigo mais seguro, usar o " 'use strict ' " para tornar o codigo mais seguro. ele torna o erro mais visivel e proibe alguns argumentos errados */
'use strict';

// let temCarteira = false;
// const passouNoTeste = true;

// if(passouNoTeste) temCarteira = true;
// if(temCarteira) console.log('Ok. você está autorizado a dirigir :D');

//Aula 2 

function login() {
    console.log('O login esta certo')
}

login()

function fazedorDeSucos(maca,laranja) {
    const suco = `O suco contêm ${maca} maçães e ${laranja} laranjas.`
    return suco
}


const sucoMisto = fazedorDeSucos(3 , 2)
console.log(sucoMisto)

const sucoDeMaca = fazedorDeSucos(5, 0)
console.log(sucoDeMaca)




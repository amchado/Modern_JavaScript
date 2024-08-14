// Aula 1 

/* Para tornar o codigo mais seguro, usar o " 'use strict ' " para tornar o codigo mais seguro. ele torna o erro mais visivel e proibe alguns argumentos errados */
'use strict';

let temCarteira = false;
const passouNoTeste = true;

if(passouNoTeste) temCarteira = true;
if(temCarteira) console.log('Ok. você está autorizado a dirigir :D');

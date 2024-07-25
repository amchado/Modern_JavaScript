
// let isIsland = false;
// let language;

// language = "ingles"
// const currentYear = 2024
// const continent = "America do Sul"
// const country = "Brasil"
// const populantion = 30

// isIsland = true;

// // let halfPopulation = populantion / 2
// // console.log(halfPopulation);
// // halfPopulation++;
// // console.log(halfPopulation);

// // const finlandiaPopulation = 6
// // console.log(populantion > finlandiaPopulation)

// // let description = "O Brasil fica na America do Sul, e é um Pais com aproximadamente 220 milhões de pessoas"
// // // console.log(description)

// // description = `O ${country} fica na ${continent}, e é um Pais com aproximadamente ${populantion} milhões de pessoas `
// // console.log(description)

// if(populantion > 33){
//     console.log(`O ${country} tem uma população acima da media`)
// }else {
//     console.log(`O ${country} tem uma população de ${33 - populantion} milhões abaixo da media.`)
// }

// const paisesvizinhos = Number(prompt("Quantos países vizinhos seu país tem?")); 
// console.log(paisesvizinhos)

// if(paisesvizinhos === 1){
//     console.log("Apenas 1")
// }else if(paisesvizinhos > 1){
//     console.log("Mais de 1 país vizinho")
// }else{
//     console.log("O pais não possui fronteiras")
// }

// if(language === "ingles" && populantion < 50 && isIsland === false){
//     console.log('Sara voce deveria morar aqui ')
// }else{
//     console.log("Você deveria encontra outro país para morar ")
// }


// const language = 'hindi'

// switch(language){
//    case 'chinese':
//    case 'mandarin':
//         console.log(language)
//         console.log('MOST number of native speakers!')
//     break
//     case 'spanish':
//         console.log(language)
//         console.log('2nd place in number of native speakers')
//         break
//     case 'english':
//         console.log(language)
//         console.log('3rd place')
//         break
//     case 'hindi':
//         console.log(language)
//         console.log('Number 4')
//         break
//     case 'arabic':
//         console.log(language)
//         console.log('5th most spoken language')
//         break
//     default:
//         console.log(language)
//         console.log('Great language too :D')
// }

const country = "Brasil"
const populantion = 133
console.log(`${country} population is ${populantion > 33 ? 'above' : 'below'} average`)
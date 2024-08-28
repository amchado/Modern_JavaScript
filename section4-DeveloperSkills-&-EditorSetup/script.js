
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function(temps){
//     let max = temps[0]
//     let min = temps[0]
//     for(let i = 0; i < temps.length; i++){
//         const curTemp = temps[i]

//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > max){max = curTemp}
//         if(curTemp < min){min = curTemp}
//     }
//     console.log(max, min);
//     return max - min
// }

// const amplitude = calcTempAmplitude(temperatures)
// console.log(amplitude);

//Problem 2 



// const calcTempAmplitudeNew = function(t1, t2){
//     const temps = t1.concat(t2)
//     console.log(temps)


//     let max = temps[0]
//     let min = temps[0]

//     for(let i = 0; i < temps.length; i++){
//         const curTemp = temps[i]

//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > max){max = curTemp}
//         if(curTemp < min){min = curTemp}
//     }
//     console.log(max, min);
//     return max - min
// }

// const amplitudeNew = calcTempAmplitudeNew([1,5,10],[-50,2,15])
// console.log(amplitudeNew);


// DEBUGGER 
// const calcTempAmplitudeBug = function(t1, t2){
//     const temps = t1.concat(t2)
//     console.log(temps)


//     let max = 0
//     let min = 0

//     for(let i = 0; i < temps.length; i++){
//         const curTemp = temps[i]

//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > max){max = curTemp}
//         if(curTemp < min){min = curTemp}
//     }
//     console.log(max, min);
//     return max - min
// }

// const amplitudeBug = calcTempAmplitudeBug([1,5,10],[6,2,15])
// console.log(amplitudeBug);



//Challenger 

const arr1 = [17,21,23]
const arr2 = [12,5, -5, 0, 4]

// const printForecast = function(array){
//     const forescast = []

//     for(let i = 0 ; i < array.length; i++){
//         const currentDay = i + 1
//         if(currentDay === 1){
//             forescast.push(`Dia ${currentDay} fez ${array[i]}° graus`)
//         }else{
//             forescast.push(`Dia ${currentDay} fez ${array[i]}° graus`)
//         }
        
//     }
//         return forescast
// }

// console.log(printForecast(arr1))



// const printForecast2 = function(array){
//     const forescast = []

//     for(let i = 0 ; i < array.length; i++){
//         forescast.push(`Dia ${i + 1} fez ${array[i]}° graus`)
        
//     }
//         return forescast
// }

// console.log(printForecast2(arr2))

const printForecast3 = function(array3){
    let soma = '... '
    for(let i = 0; i < array3.length; i++){
        soma += `Dia ${i + 1} fez ${array3[i]}° graus ... `
    }
    console.log(soma)
}

printForecast3(arr1)
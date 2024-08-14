const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heighJohn = 1.95 

// const massMark = 95
// const heightMark = 1.88
// const massJohn = 85
// const heighJohn = 1.76


const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heighJohn * heighJohn)
console.log(BMIMark, BMIJohn)


if(BMIMark > BMIJohn){
    console.log(`O IMC do Mark(${BMIMark}) é maior que o do Jhon(${BMIJohn}) .`)
}else{
    console.log(`O IMG de John(${BMIJohn}) é Maior que o de Mark(${BMIMark}).`)
}



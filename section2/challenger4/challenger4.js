const bill = 430

let tip;

tip = bill >= 50 && bill <= 300 ? `A conta deu ${bill}, a gorjeta foi ${(bill * 15/100)}, o valor total foi ${bill + (bill * 15/100)}.   ` : `A conta de ${bill}, a gorgeta foi ${bill * 20/100}, e o total foi de ${bill + (bill * 20/100)} `

console.log(tip)
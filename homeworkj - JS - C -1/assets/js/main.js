

//!!!КРЕДИТНЫЙ КАЛЬКУЛЯТОР аутентный 
//тело кредита 100_000 грн  на 24 месяца и  36 % годових
let sum = 100000;
let term = 24;
let rate = 36;
let mRate = 36 / 100 / 12; // 0.03
//Чтобы определить значение процента в месяц, годовую процентную ставку 36 делим на 100, а затем на 12. Получается 0,03.
let aytent;//Выплаты в месяц
aytent = sum * (mRate * (1 + mRate) ** term) / ((1 + mRate) ** term - 1)
aytent = aytent.toFixed(2);

let sum2 = sum;



// Погашение кредита

//rateOfBodyPart == sum2 STOP
console.log(`Тело кредита ${sum},Погашаемое тело ${sum2}, Срок в месяцах ${term}, под ${rate}% годових ежемесячный платеж ${aytent},
	
`);

for (i = 1; i <= term; i++) {
	console.log(i)

	let bodyPart = +(sum2 * mRate).toFixed(2); // Проценты по кредиту

	let rateOfBodyPart = aytent - (bodyPart); // Погашение кредита
	sum2 = (sum2 - rateOfBodyPart).toFixed(2);
	rateOfBodyPart = rateOfBodyPart.toFixed(2);
	if (i == term && sum2 != 0) {
		sum2 = 0;
		bodyPart += sum2;

	}

	console.log(`Месяц ${i} - Тело кредита ${sum2} - Проценты по кредиту ${bodyPart} - Погашение кредита ${rateOfBodyPart} - Выплаты в месяц ${aytent}
`);
}


// Не работает проверка на NaN
let x = +prompt ('Введите число, но не больше 1000');
let value= x + ' - Простое число';
function getSimpleNumb(a,b) {
	if (typeof a == 'number') {
  	if (a > 1000) {
    	alert ('Вы ввели число больше 1000, попробуйте заново')
    }
		for (i = 2; i < x; i++) {
 			if (a % i == 0) {
				b = a + ' - Непростое число';
        break
      } 
  	} 
  } 
 	console.log (b);
}
  getSimpleNumb(x, value);


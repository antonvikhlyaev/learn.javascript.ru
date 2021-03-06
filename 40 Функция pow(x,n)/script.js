/*
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
*/

/**
 * Возводит x в степень n
 * @param {number} x число, которое возводится в степень
 * @param {number} n степень, должна быть целым числом больше 1
 * @return {number} x в степени n
 */

function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = +prompt("Введите первое число:", '');
var n = +prompt("Введите второе число:", '');

if (n <= 1) {
  alert('Степень ' + n + ' не поддерживается! Введите целую степень, которая больше 1');
} else {
  alert(pow(x, n));
}
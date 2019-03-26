/*
Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
- С использованием цикла.
- Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
- С использованием формулы для суммы арифметической прогрессии.
*/

/**
 * Функция, которая для данного n вычисляет сумму чисел от 1 до n
 * @param {number} число
 * @return {number} сумма чисел
 */

// Цикл For
function sumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
    // sum = sum + i;
  }
  return sum;
}

// Рекурсия
function sumTo(number) {
  if (number == 1) {
    return 1;
  }
  return number + sumTo(number - 1);
}

// Арифметическая прогрессия
function sumTo(number) {
  return number * (number + 1) / 2;
}

var number = +prompt('Введите число: ', '');

alert(sumTo(number));
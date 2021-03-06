/*
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/

// Вариант 1
// while (true) {
//   let number = prompt('Введите число больше 100?', '');

//   if (number >= 100 || number === null) {
//     console.log('На выход!');
//     break;
//   }
// }

// Вариант 2
let number;

do {
  number = prompt('Введите число больше 100?', '');
} while (number <= 100 && number != null);
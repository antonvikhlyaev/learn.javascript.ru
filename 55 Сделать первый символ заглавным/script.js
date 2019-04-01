/*
Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:

ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке

P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().
*/

function ucFirst(str) {
  let firstChar = str.charAt(0).toUpperCase();
  if (firstChar === '') {
    return 'Ничего не найдено!';
  }
  let otherChars = str.slice(1);
  return firstChar + otherChars;
}

console.log(ucFirst(''));
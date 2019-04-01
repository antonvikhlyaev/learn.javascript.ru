/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.

Результатом функции должна быть (при необходимости) усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."

truncate("Всем привет!", 20) = "Всем привет!"
Эта функция имеет применение в жизни. Она используется, чтобы усекать слишком длинные темы сообщений.

P.S. В кодировке Unicode существует специальный символ «троеточие»: … (HTML: &hellip;), но в этой задаче подразумеваются именно три точки подряд.
*/

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + '...';
  }
  return str;
}
/*
Каков будет результат выполнения кода?
*/

function g() {
  return 1;
}
alert(g);

/*
А такого? Будет ли разница, если да – почему?
*/

(function g() {
  return 1;
});
alert(g);


// Первая функция сработает, потому что функция объявлена, как Function Declaration, а вторая функция не сработает, потому что функция g видна только внутри самой функции.
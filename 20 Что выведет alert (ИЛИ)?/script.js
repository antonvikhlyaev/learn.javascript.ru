/*
Что выведет код ниже?
*/

alert(alert(1) || 2 || alert(3));
// 1, 2. До alert(3) не дойдет
// alert - undefined --> false
// 2 - true
/* 1) попросить юзера ввести число 
2) перевести переменную в числовой формат
3) попросить юзера ввести степень
4) перевести переменную в числовой формат
5) получить число в степени и вывести результат в консоль
*/


let userBase = prompt ('введите число');
userBase = Number(userBase);
let userPower = prompt('введите степень');
userPower = Number(userPower);
console.log (userBase ** userPower);
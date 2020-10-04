/* написать скрипт, который подсчитывает общую сумму зарплат сотрудников
количество сотрудников  - переменная employees
зарплаты - случайные числа от 500 до 5000
общую сумму зарлпат totalSalary нужно вывести в консоль*/

// заявить переменные
const employees = 3;
const salaryMin = 500;
const salaryMax = 5000;
let totalSalary = 0;

//составить цикл
for (let i = 1; i <= employees; i+=1){
    const salary = Math.round (
        Math.random () * (salaryMax - salaryMin) + salaryMin,);
        console.log (`зарплата сотрудника № ${i} - ${salary}`);
    
    totalSalary += salary;}
    console.log ('общий зарплатный фонд:', totalSalary);
//скрипт, который относит уровень зарплаты к определенной группе

const salary = 1500;

if (salary <=500){
    console.log ("Уровень 1");
} else if (salary > 500 && salary < 1500) {
   console.log ("Уровень 2");
} else if (
    salary => 1500 && salary < 2500){
        console.log ('Уровень 3');
    } else { console.log ('Уровень 4')}
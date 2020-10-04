/* написать скрипт, который считает сумму всех четных чисел в диапазоне от min до max*/

//определить переменные
const min = 2;
const max = 10;
let sum = 0;

// цикл
for ( let i = min; i <= max; i+= 1){
    console.log (i);

    if ( i % 2 === 0){
        console.log ('четное', i);
        sum +=i
    }
}

// выдать сумму
console.log ('общая сумма четных', sum);

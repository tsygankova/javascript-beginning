/* for cycle
скрипт выбора стоимости отеля по количеству звезд
1 - $20, 2 - $30, 3 - $40, 4 - $50. 5 - $120
если значение не 1-5, сообщение "Такого количества звезд не существует"
*/

const stars = 8;
let price;

if (stars === 1){
    price = 20;
} 
else if (stars === 2){ price = 30;}
else if ( stars === 3){ price = 40;}
else if (stars === 4){ price = 50;}
else if (stars === 5){ price = 120;}
else { console.log(`Такого количества звезд не существует`);}

console.log (`цена $ ${price}`);


/* for cycle
скрипт выбора стоимости отеля по количеству звезд
1 - $20, 2 - $30, 3 - $40, 4 - $50. 5 - $120
если значение не 1-5, сообщение "Такого количества звезд не существует"
*/

let stars;
let price;

stars  = 1;

if (stars === 1){
console.log (`Цена отеля за сутки: $${price ===20}`);}
else if(stars === 2){console.log (`Цена отеля за сутки: $${price = 30}`);}
else if(stars === 3){console.log (`Цена отеля за сутки: $${price = 0}`);}
else if(stars === 4){console.log (`Цена отеля за сутки: $${price = 0}`);}
else if(stars === 5){console.log (`Цена отеля за сутки: $${price = 120}`);}
else {console.log(`Такого количества звезд не существует`);}
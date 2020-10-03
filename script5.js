/* скрипт, который проверяет право доступа пользователя к контенту согласно типу подписки
3 типа подписки free, vip, pro
доступ только у vip и pro */

const sub = 'pro';
const canGetAcess = sub === 'pro' || sub === 'vip';
console.log('Доступ к контенту разрешен ', canGetAcess);
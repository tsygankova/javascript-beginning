/* скрипт, который проверяет возможность открыть чат с пользователем
условия:
пользователь - друг
пользователь онлайн
пользователь не поставил редим DND*/

const isFriend = true;
const isOnline = true;
const isDnd = false;

const canOpenChat = isFriend && isOnline && !isDnd;
console.log('Можно открыть чат?', canOpenChat);
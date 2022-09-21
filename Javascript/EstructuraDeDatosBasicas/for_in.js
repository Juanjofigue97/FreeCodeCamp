const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};
function countOnline(usersObj) {
  // Cambia solo el código debajo de esta línea
  let contador = 0;
  for (let user in usersObj) {
    // console.log(usersObj[user].online)
    if (usersObj[user].online) {
      contador += 1;
    }
  }
  return contador;
}

console.log(countOnline(users));

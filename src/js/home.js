console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}


const getUserAll = new Promise(function(todoBien, todoMal) {
  setTimeout(function() {
    todoBien('Se acabó el tiemposs');
  }, 5000) 
});

const getUser = new Promise(function(todoBien, todoMal) {
  setTimeout(function() {
    todoMal('Se acabó el tiempo');
  }, 3000) 
});

//getUser
//  .then(function() {
//    console.log('Todo right');
//  })
//  .catch(function(message) {
//    console.log(message);
//  });

  Promise.race([
    getUserAll,
    getUser,
  ])
  .then(function(message) {
    console.log(message);
  })
  .catch(function(message) {
    console.log(message);
  })
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
  });

fetch('https://randomuser.me/api/')
  .then(function(response) {
    console.log(response)
    return response.json()
  })
  .then(function(user) {
    console.log('user', user.results[0].name.first);
  })
  .catch(function() {
    console.log('algo falló en mi corazoooon');
  });

  (async function load() {
    async function getData(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } 
    const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action');  
    const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama');  
    const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation');  
    console.log(actionList, dramaList, animationList);
    
  })()

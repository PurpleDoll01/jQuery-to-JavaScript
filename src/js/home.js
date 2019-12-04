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

    const $actionContainer = document.querySelector('#action');
    const $dramaContainer = document.getElementById('#drama');
    const $animationContainer = document.getElementById('#animation');

    const $featuringContainer = document.getElementById('#featuring');
    const $form = document.getElementById('#form');
    const $home = document.getElementById('#home');

    const $modal = document.getElementById('modal');
    const $overlay = document.getElementById('overlay');
    const $hideModal = document.getElementById('hide-modal');

    const $modalTitle = $modal.querySelector('h1');
    const $modalImage = $modal.querySelector('img');
    const $modalDescription = $modal.querySelector('p');
  })()

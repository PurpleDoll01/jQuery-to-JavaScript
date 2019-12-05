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

    const $form = document.getElementById('form'); 
    const $home = document.getElementById('home');
    $form.addEventListener('submit', (event) => {
      event.preventDefault();  
      $home.classList.add('search-active');
    })

    const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action');  
    const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama');  
    const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation');  
    console.log(actionList, dramaList, animationList); 

    function videoItemTemplate(movie) {
      return (
        `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
         ${movie.title}
        </h4>
      </div>`
      )
    }

    function createTemplate(HTMLString) {
      const html = document.implementation.createHTMLDocument();
      html.body.innerHTML = HTMLString;
      return html.body.children[0];
    }

    function addEventClick($element) {
      $element.addEventListener('click', () => {
        showModal();
      })
    }

    function renderMovieList(list, $container) {
      $container.children[0].remove();
      list.forEach((movie) => {
        const HTMLString = videoItemTemplate(movie);
        const movieElement = createTemplate(HTMLString);
        $container.append(movieElement);
        addEventClick(movieElement);
      })
    }

    const $actionContainer = document.querySelector('#action');
    const $dramaContainer = document.getElementById('dramita');
    const $animationContainer = document.getElementById('animation');

    renderMovieList(actionList.data.movies, $actionContainer);
    renderMovieList(dramaList.data.movies, $dramaContainer);
    renderMovieList(animationList.data.movies, $animationContainer);

    const $featuringContainer = document.getElementById('featuring');
    const $modal = document.getElementById('modal');
    const $overlay = document.getElementById('overlay');
    const $hideModal = document.getElementById('hide-modal');

    const $modalTitle = $modal.querySelector('h1');
    const $modalImage = $modal.querySelector('img');
    const $modalDescription = $modal.querySelector('p');

    function showModal() {
      $overlay.classList.add('active');
      $modal.style.animation = 'modalIn .8s forwards';
    }

    $hideModal.addEventListener('click', hideModal);

    function hideModal() {
      $overlay.classList.remove('active');
      $modal.style.animation = 'modalOut .8s forwards';
    }

  })()

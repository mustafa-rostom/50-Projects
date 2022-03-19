const API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c9ecfa59b603de41e05b1c521c9c5e6&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=7c9ecfa59b603de41e05b1c521c9c5e6&query="';

const form = document.getElementById('form')
const search = document.getElementById('search')
    //Get initial movies
getMovie(API_URL)
async function getMovie(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovie(SEARCH_URL + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})
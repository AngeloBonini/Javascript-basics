// "use strict";
const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const movies = []

const rendermovies = (filter = '') => {
  const movieList = document.getElementById('movie-list')

  if (movies.length === 0) {
    movieList.classList.remove('visible')
  } else {
    movieList.classList.add('visible')
  }
  movieList.innerHTML = ''

  const fileteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  fileteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li')
    if(!('info' in movie)){
      alert("the porperty is there!!!");
    }
    const { info, ...otherProps } = movie;
    if(info){

    }
    console.log(otherProps);
    // const {title: movieTitle} = info;
    let { getFormattedTitle } = movie;
    getFormattedTitle = getFormattedTitle.apply(movie, [])
    text = getFormattedTitle() + ' - '
    for (key in info) {
      if (key !== 'title' && key !== '_title') {
        text = text + `${key}: ${info[key]}`
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl)
  })
}
const searchMoviesHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value
  rendermovies(filterTerm)
}

const addMovieHandler = () => {
  const title = document.getElementById('title').value
  const extraName = document.getElementById('extra-name').value
  const extraValue = document.getElementById('extra-value').value

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    alert('pelase enter valid values')
    return
  }
  const newMovie = {
    info: {
      set title(val){
        if(val.trim() === ''){
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title(){
        return this._title.toUpperCase();
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(), 
    getFormattedTitle(){
      console.log(this);
      return this.info.title.toUpperCase();
    }
  }
  newMovie.info.title = title;
  console.log(newMovie.info.title);
  movies.push(newMovie)
  rendermovies()
  const newMovie2 = Object.assign({}, newMovie);
  console.log(newMovie2);
}
addMovieBtn.addEventListener('click', addMovieHandler)
searchBtn.addEventListener('click', searchMoviesHandler)

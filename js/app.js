// no localStorage
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);


});



// remeber to use preventDefault to stop it trying to do a post
const handleFormSubmit = function(event){
  event.preventDefault();
  const movieUl = document.createElement('ul');
  const titleLi = document.createElement('li');
  titleLi.textContent = `Title: ${movie.title}`;
  const directorLi = document.createElement('li');
  directorLi.textContent = `Director: ${movie.director}`;
  const genreLi = document.createElement('li');
  genreLi.textContent = `Genre: ${movie.genre}`;

  movieUl.appendChild(titleLi);
  movieUl.appendChild(directorLi);
  movieUl.appendChild(genreLi);

  return movieUl;
}




// with localStorage
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  renderList();
});

// this allows the previously entered data to be stored in localstorage in the browser(json stuff).  If there isn't anything there, it should return an empty array.
const getList = function(){
  if (JSON.parse(localStorage.getItem('movies')) !== null){
    return JSON.parse(localStorage.getItem('movies'));
  } else {
    return [];
  }
};

// this is what happens when the form is submitted (when the user hits save).  it will push the information in the movielist array and put it through the getlist function above i.e. storing it in localstorage. Finally, it resets the form to zero.
const handleFormSubmit = function(event){
  event.preventDefault();
  movieList = getList();
  const newMovie = {
    title: event.target.title.value,
    director: event.target.director.value,
    genre: event.target.genre.value
  };

  movieList.push(newMovie);

  localStorage.setItem('movies', JSON.stringify(movieList));
  renderList();
  event.target.reset();
};

// this is the process of actually creating the elements for the list.  When the input is created, it is then appended as a child to the parent of the movieUl.
const buildList = function(movie){
  const movieUl = document.createElement('ul');
  const titleLi = document.createElement('li');
  titleLi.textContent = `Title: ${movie.title}`;
  const directorLi = document.createElement('li');
  directorLi.textContent = `Director: ${movie.director}`;
  const genreLi = document.createElement('li');
  genreLi.textContent = `Genre: ${movie.genre}`;

  movieUl.appendChild(titleLi);
  movieUl.appendChild(directorLi);
  movieUl.appendChild(genreLi);

  return movieUl;
}


// this allows the list to be displayed, using the getList function above, and will add on any children to the end.
const renderList = function(){
    const movieDiv = document.querySelector('#movie-list');
    movieDiv.innerHTML = "";
  const movieList = getList();
  movieList.forEach((movie) => {
    movieUl = buildList(movie);
    movieDiv.appendChild(movieUl);

  });


}

import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { MoviesApi } from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const [initialMovies, setInitialMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [resultMovies, setResultMovies] = useState([]);
  const [shortMovieToggle, setShortMovieToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    MoviesApi.getMovies()
      .then((res) => setInitialMovies(res))
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    const resultMoviesHistory = localStorage.getItem('resultMovies');
    const moviesListHistory = localStorage.getItem('moviesList');
    if (resultMoviesHistory) setResultMovies(JSON.parse(resultMoviesHistory));
    if (moviesListHistory) setMoviesList(JSON.parse(moviesListHistory));
  }, [])

  function handleSearch(searchValue) {
    setIsLoading(true);

    // let initialMovies;
    // try {
    //   initialMovies = await MoviesApi.getMovies();
    //   setIsLoading(false);
    // } catch(err) {
    //   console.log(err);
    // }

    let filteredMoviesList = initialMovies.filter(({ nameRU, nameEN }) => {
      if (nameRU.toLowerCase().includes(searchValue.toLowerCase())) return true;
      else if (nameEN.toLowerCase().includes(searchValue.toLowerCase())) return true;
      return false;
    });
    
    setMoviesList(filteredMoviesList);
    
    if (shortMovieToggle) {
      filteredMoviesList = filteredMoviesList.filter(({ duration }) => {
        if (duration < 40) return true;
        return false;
      })
    }
    setResultMovies(filteredMoviesList);

    localStorage.setItem('resultMovies', JSON.stringify(filteredMoviesList));
    localStorage.setItem('moviesList', JSON.stringify(filteredMoviesList));
    localStorage.setItem('searchValue', searchValue);

    setIsLoading(false);
  }

  const handleIsShortMovies = (isShortMovie, currentMoviesList = moviesList) => {
    setShortMovieToggle(isShortMovie);
    if (currentMoviesList && isShortMovie) {
      currentMoviesList = currentMoviesList.filter(({ duration }) => {
        if (duration < 40) return true;
        return false;
      })
    }
    setResultMovies(currentMoviesList);
    
    localStorage.setItem('resultMovies', JSON.stringify(currentMoviesList));
    localStorage.setItem('isShortMovie', JSON.stringify(isShortMovie));
  }

  return (
    <main>
      <SearchForm onSubmit={handleSearch} onChecked={handleIsShortMovies}/>
      {isLoading ? (<Preloader />) : null}
      {!isLoading ?
        (
          <MoviesCardList cards={resultMovies} />
        ) : null}
      {/* <div className='movies-list__more-container'>
        <button type='button' className='movies-list__more'>Ещё</button>
      </div> */}
    </main>

  )
}

export default Movies;
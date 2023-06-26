import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { MoviesApi } from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const [initialMovies, setInitialMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   MoviesApi.getMovies()
  //     .then((res) => setInitialMovies(res))
  //     .catch(err => console.log(err));
  // }, [])

  useEffect(() => {
    const localStorageMovies = localStorage.getItem('SearchHistory');
    if (localStorageMovies) {
      setMoviesList(JSON.parse(localStorageMovies).resultMovies);
    }
  }, [])

  async function handleSearch(inputData) {
    setIsLoading(true);

    let initialMovies;
    try {
      initialMovies = await MoviesApi.getMovies();
      setIsLoading(false);
    } catch(err) {
      console.log(err);
    }

    let resultMovies = initialMovies.filter(({ nameRU }) => {
      return nameRU.toLowerCase().includes(inputData.request.toLowerCase());
    });
    setMoviesList(resultMovies);
    localStorage.setItem('SearchHistory', JSON.stringify({ resultMovies, inputData }));
  }

  return (
    <main>
      <SearchForm onSubmit={handleSearch} />
      {isLoading ? (<Preloader />) : null}
      {!isLoading ?
        (
          <MoviesCardList cards={moviesList} />
        ) : null}
      {/* <div className='movies-list__more-container'>
        <button type='button' className='movies-list__more'>Ещё</button>
      </div> */}
    </main>

  )
}

export default Movies;
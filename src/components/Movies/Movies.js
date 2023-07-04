import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { MoviesApi } from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import { MainApi } from '../../utils/MainApi';
import { BASE_URL, SERVER_ERROR, SHORT_MOVIE_LENGTH } from '../../utils/constants';

function Movies(openPopup) {
  const [initialMovies, setInitialMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [resultMovies, setResultMovies] = useState([]);
  const [shortMovieToggle, setShortMovieToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMoviesCardList, setShowMoviesCardList] = useState(false);

    // let initialMovies;
    // try {
    //   initialMovies = await MoviesApi.getMovies();
    //   setIsLoading(false);
    // } catch(err) {
    //   console.log(err);
    // }

  useEffect(() => {
    MoviesApi.getMovies()
      .then((res) => setInitialMovies(res))
      .catch(() => openPopup(SERVER_ERROR));
  }, [openPopup])

  useEffect(() => {
      const resultMoviesHistory = localStorage.getItem('resultMovies');
      const moviesListHistory = localStorage.getItem('moviesList');
      if (resultMoviesHistory) setResultMovies(JSON.parse(resultMoviesHistory));
      if (moviesListHistory) setMoviesList(JSON.parse(moviesListHistory));
      if (resultMoviesHistory) setShowMoviesCardList(true);
    }, [])

  function handleSearch(searchValue) {
    setShowMoviesCardList(true);
    setIsLoading(true);

    let filteredMoviesList = initialMovies.filter(({ nameRU, nameEN }) => {
      if (nameRU.toLowerCase().includes(searchValue.toLowerCase())) return true;
      else if (nameEN.toLowerCase().includes(searchValue.toLowerCase())) return true;
      return false;
    });
    
    setMoviesList(filteredMoviesList);
    localStorage.setItem('moviesList', JSON.stringify(filteredMoviesList));
    
    if (shortMovieToggle) {
      filteredMoviesList = filteredMoviesList.filter(({ duration }) => {
        if (duration < SHORT_MOVIE_LENGTH) return true;
        return false;
      })
    }
    setResultMovies(filteredMoviesList);

    checkSaveStatus(filteredMoviesList);
    localStorage.setItem('searchValue', searchValue);

    setIsLoading(false);
  }

  const handleIsShortMovies = (isShortMovie, currentMoviesList = moviesList) => {
    setShortMovieToggle(isShortMovie);
    if (currentMoviesList && isShortMovie) {
      currentMoviesList = currentMoviesList.filter(({ duration }) => {
        if (duration < SHORT_MOVIE_LENGTH) return true;
        return false;
      })
    }

    checkSaveStatus(currentMoviesList);
  
    localStorage.setItem('isShortMovie', JSON.stringify(isShortMovie));
  }

  const handleAddMovie = (movie) => {
    const movieObj = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: BASE_URL + movie.image.url,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: BASE_URL + movie.image.url,
      movieId: movie.id,
    };
    MainApi.addMovie(movieObj).then((savedMovie) => {
      if (savedMovie) {
        checkSaveStatus(resultMovies);
      }
    })
      .catch((err) => console.log(err));
  }

  const checkSaveStatus = (moviesListToShow) => {
    MainApi.getMovies().then((savedMovies) => {
      const data = moviesListToShow.map((item) => {
        const movie = savedMovies.find(({ movieId }) => movieId === item.id);
        if (movie) {
          item.isSaved = true;
          item.savedId = movie._id;
        } else {
          item.isSaved = false;
        }
        return item;
      });
      setResultMovies(data);
      localStorage.setItem('resultMovies', JSON.stringify(data));
    })
      .catch((err) => console.log(err));
  }

  const handleDeleteMovie = (id) => {
    MainApi.deleteMovie(id)
      .then((movie) => {
        if (movie) {
          checkSaveStatus(resultMovies);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <main>
      <SearchForm onSubmit={handleSearch} onChecked={handleIsShortMovies}/>
      {isLoading ? (<Preloader />) : null}
      {resultMovies && !isLoading && showMoviesCardList ?
        (
          <MoviesCardList cards={resultMovies} onAddMovie={handleAddMovie} onDeleteMovie={handleDeleteMovie} />
        ) : null}
    </main>

  )
}

export default Movies;
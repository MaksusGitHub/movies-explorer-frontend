import './SavedMovies'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import { MainApi } from '../../utils/MainApi';

function SavedMovies({ openPopup }) {
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState(localStorage.getItem('savedMoviesList'));
  const [shortMovieToggle, setShortMovieToggle] = useState(false);

  useEffect(() => {
    getSavedMovies();
  }, [])

  const updateMoviesPage = () => {
    const resultMoviesHistory = localStorage.getItem('resultMovies');
    let resultMovies;
    if (resultMoviesHistory) {
      resultMovies = JSON.parse(localStorage.getItem('resultMovies'))
    };
    MainApi.getMovies().then((savedMovies) => {
      resultMovies = resultMovies.map((item) => {
        const movie = savedMovies.find(({ movieId }) => movieId === item.id);
        if (movie) {
          item.isSaved = true;
          item.savedId = movie._id;
        } else {
          item.isSaved = false;
        }
        return item;
      });
      localStorage.setItem('resultMovies', JSON.stringify(resultMovies));
    })
      .catch((err) => console.log(err));
  }

  const getSavedMovies = () => {
    MainApi.getMovies().then((movies) => {
      if (movies.length) {
        setSavedMoviesList(movies);
        setSavedMovies(movies);
        let searchValueHistory = localStorage.getItem('searchValueSavedMovies');
        if (searchValueHistory === null) searchValueHistory = '';
        handleSearch(searchValueHistory, movies);
      }
    })
      .catch((err) => {
        openPopup(err);
    })
  }

  const handleDeleteMovie = (id) => {
    MainApi.deleteMovie(id).then(() => {
      getSavedMovies();
      updateMoviesPage();
    })
      .catch((err) => {
        openPopup(err);
      });
  }

  const handleIsShortMovies = (isShortMovie, currentMoviesList = savedMoviesList) => {
    setShortMovieToggle(isShortMovie);
    if (currentMoviesList && isShortMovie) {
      currentMoviesList = currentMoviesList.filter(({ duration }) => {
        if (duration < 40) return true;
        return false;
      })
    }
    setSavedMovies(currentMoviesList);
    
    localStorage.setItem('savedMovies', JSON.stringify(currentMoviesList));
    localStorage.setItem('isShortSavedMovie', JSON.stringify(isShortMovie));
  }

  const handleSearch = (searchValue, movies = savedMoviesList) => {
    setIsLoading(true);

    let filteredMoviesList = movies.filter(({ nameRU, nameEN }) => {
      if (nameRU.toLowerCase().includes(searchValue.toLowerCase())) return true;
      else if (nameEN.toLowerCase().includes(searchValue.toLowerCase())) return true;
      return false;
    });

    setSavedMovies(filteredMoviesList);

    if (shortMovieToggle) {
      filteredMoviesList = filteredMoviesList.filter(({ duration }) => {
        if (duration < 40) return true;
        return false;
      })
    }
    setSavedMovies(filteredMoviesList);

    localStorage.setItem('savedMovies', JSON.stringify(filteredMoviesList));
    localStorage.setItem('savedMoviesList', JSON.stringify(filteredMoviesList));
    localStorage.setItem('searchValueSavedMovies', searchValue);

    setIsLoading(false);
  }

  return (
    <main>
      <SearchForm onSubmit={handleSearch} onChecked={handleIsShortMovies} />
      {isLoading ? (<Preloader />) : null}
      {!isLoading && savedMovies ?
        (
          <MoviesCardList cards={savedMovies} onDeleteMovie={handleDeleteMovie} />
        ) : null}
    </main>
  )
}

export default SavedMovies;
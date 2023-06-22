import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <div className='movies-list__more-container'>
        <button className='movies-list__more'>Ещё</button>
      </div>
    </>

  )
}

export default Movies;
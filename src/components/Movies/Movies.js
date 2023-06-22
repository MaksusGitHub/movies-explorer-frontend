import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList />
      <div className='movies-list__more-container'>
        <button type='button' className='movies-list__more'>Ещё</button>
      </div>
    </main>

  )
}

export default Movies;
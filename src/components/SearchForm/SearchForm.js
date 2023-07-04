import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSubmit, onChecked }) {
  const [searchValue, setSearchValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isErrorShowed, setIsErrorShowed] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/movies') {
      const searchValueHistory = localStorage.getItem('searchValue');
      if (searchValueHistory) {
        setSearchValue(searchValueHistory);
      }
    } else if (location.pathname === '/saved-movies') {
      const searchValueSavedHistory = localStorage.getItem('searchValueSavedMovies');
      if (searchValueSavedHistory) {
        setSearchValue(searchValueSavedHistory);
      }
    }
  }, []);

  
  const handleChange = (e) => {
    setIsErrorShowed(false);
    setSearchValue(e.target.value);
    handleValidation(e.target.value);
  }
  
  const handleChecked = (checked) => {
    onChecked(checked);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isValid) {
      onSubmit(searchValue);
    } else {
      setIsErrorShowed(true);
    }
  }

  const handleValidation = (inputValue) => {
    if (inputValue === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }
  
  return (
    <section className='search-form root__content'>
      <div className='search-form__block'>
        <form className='search-form__container' onSubmit={handleSubmit} noValidate>
          <div className='search-form__input-container'>
            <input
              className={`search-form__input ${isErrorShowed && 'search-form__input_error'}`}
              name='searchValue'
              placeholder={!isErrorShowed ? 'Фильм' : 'Нужно ввести ключевое слово'}
              value={searchValue ?? ''}
              onChange={handleChange}
              required
            />
            <button type='submit' className='search-form__btn-submit'></button>
          </div>
          <FilterCheckbox onChecked={handleChecked} />
        </form>
      </div>
    </section>
  )
}

export default SearchForm;
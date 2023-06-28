import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSubmit, onChecked }) {
  const [searchValue, setSearchValue] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/movies') {
      const searchValueHistory = localStorage.getItem('searchValue');
      if (searchValueHistory) {
        setSearchValue(searchValueHistory);
      }
    }
  }, []);

  
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }
  
  const handleChecked = (checked) => {
    onChecked(checked);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue);
  }
  
  return (
    <section className='search-form root__content'>
      <div className='search-form__block'>
        <form className='search-form__container' onSubmit={handleSubmit}>
          <div className='search-form__input-container'>
            <input
              className='search-form__input'
              name='searchValue'
              placeholder='Фильм'
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
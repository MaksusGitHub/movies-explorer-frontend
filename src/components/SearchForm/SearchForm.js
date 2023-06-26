import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSubmit }) {
  const [inputData, setInputData] = useState({});

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/movies') {
      const SearchHistory = localStorage.getItem('SearchHistory');
      if (SearchHistory) {
        setInputData(JSON.parse(SearchHistory).inputData);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputData);
  }

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  return (
    <section className='search-form root__content'>
      <div className='search-form__block'>
        <form className='search-form__container' onSubmit={handleSubmit}>
          <div className='search-form__input-container'>
            <input
              className='search-form__input'
              name='request'
              placeholder='Фильм'
              value={inputData.request ?? ''}
              onChange={handleChange}
              required
            />
            <button type='submit' className='search-form__btn-submit'></button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  )
}

export default SearchForm;
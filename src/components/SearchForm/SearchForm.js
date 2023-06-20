import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form root__content'>
      <div className='search-form__block'>
        <form className='search-form__container'>
          <div className='search-form__input-container'>
            <input className='search-form__input' placeholder='Фильм'></input>
            <button className='search-form__btn-submit'></button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  )
}

export default SearchForm;
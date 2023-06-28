import { useEffect, useState } from 'react';
import './FilterCheckbox.css'
import { useLocation } from 'react-router-dom';

function FilterCheckbox({ onChecked }) {
  const [isShortMovie, setIsShortMovie] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/movies') {
      const isShortMovieHistory = localStorage.getItem('isShortMovie');
      if (isShortMovieHistory) {
        setIsShortMovie(JSON.parse(isShortMovieHistory));
      }
    }
  }, []);

  const handleIsShortMovie = (e) => {
    setIsShortMovie(e.target.checked);
    onChecked(e.target.checked);
  }

  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input
          className='filter-checkbox__switch'
          type='checkbox'
          name='isShortMovie'
          onChange={handleIsShortMovie}
          checked={isShortMovie ?? false}
        />
        <span className='filter-checkbox__slider'></span>
      </label>
      <p className='filter-checkbox__name'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
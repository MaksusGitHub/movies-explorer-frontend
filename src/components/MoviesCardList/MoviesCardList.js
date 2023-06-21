import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

import movie_1 from '../../images/movie_1.jpg';

function MoviesCardList() {
  return (
    <section className='movies-list root__content'>
      <ul className='movies-list__list'>
        <li className='movies-list__item'>
          <MoviesCard
            picture={movie_1}
            title='В погоне за Бенкси'
            duration='1ч 17м'
          />
        </li>
        <li className='movies-list__item'>
          <MoviesCard
            picture={movie_1}
            title='В погоне за Бенкси'
            duration='1ч 17м'
          />
        </li>
        <li className='movies-list__item'>
          <MoviesCard
            picture={movie_1}
            title='В погоне за Бенкси'
            duration='1ч 17м'
          />
        </li>
        <li className='movies-list__item'>
          <MoviesCard
            picture={movie_1}
            title='В погоне за Бенкси'
            duration='1ч 17м'
          />
        </li>
      </ul>
    </section>
  )
}

export default MoviesCardList;
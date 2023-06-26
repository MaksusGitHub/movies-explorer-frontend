import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

// import movie_1 from '../../images/movie_1.jpg';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function MoviesCardList({ cards }) {

  const location = useLocation();
  return (
    <section className={`movies-list root__content ${location.pathname === '/saved-movies' && 'movies-list__saved'}`}>
      {cards.length ? (
        <ul className='movies-list__list'>
          {
            cards.map((card) => (
              <MoviesCard
                key={card.id}
                movie={card}
              />
            ))
          }
        </ul>
      ) : (
        <p className='movies-list__not-found'>Ничего не найдено</p>
      )
      }
      
    </section>
  )
}

export default MoviesCardList;
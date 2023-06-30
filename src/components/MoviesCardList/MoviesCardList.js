import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

let moreStep = window.screen.width > 1279 ? 3 : 2;
let amountShowCards = window.screen.width > 1279 ? 12 : (window.screen.width > 600 ? 8 : 5);

function MoviesCardList({ cards, onAddMovie, onDeleteMovie }) {
  const [visibleCards, setVisibleCards] = useState(cards.slice(0, amountShowCards));
  const [cardPosition, setCardPosition] = useState(amountShowCards);

  useEffect(() => {
    setVisibleCards(cards.slice(0, amountShowCards));
  }, [cards])

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const handleResize = () => {
    const currentWidth = window.screen.width;
    moreStep = currentWidth > 1279 ? 3 : 2;
    amountShowCards = currentWidth > 1279 ? 12 : (currentWidth > 600 ? 8 : 5)
  }

  const showMore = () => {
    setVisibleCards(cards.slice(0, cardPosition + moreStep));
    setCardPosition(cardPosition + moreStep);
  }

  const location = useLocation();

  return (
    <section className={`movies-list root__content ${location.pathname === '/saved-movies' && 'movies-list__saved'}`}>
      {cards.length ? (
        <ul className='movies-list__list'>
          {
            visibleCards.map((card) => (
              <MoviesCard
                key={card.id ?? card.movieId}
                movie={card}
                onAddMovie={onAddMovie}
                onDeleteMovie={onDeleteMovie}
              />
            ))
          }
        </ul>
      ) : (
        <p className='movies-list__not-found'>Ничего не найдено</p>
      )
      }
      {(cards.length > cardPosition) ? (
        <div className='movies-list__more-container'>
          <button type='button' className='movies-list__more' onClick={showMore}>Ещё</button>
        </div>
      ) : null
      }     
    </section>
  )
}

export default MoviesCardList;
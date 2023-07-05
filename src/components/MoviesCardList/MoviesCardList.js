import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  DESKTOP_AMOUNT_CARDS,
  DESKTOP_SCREEN_WIDTH,
  DESKTOP_SHOWCARD_STEP,
  MOBILE_AMOUNT_CARDS,
  TABLET_AMOUNT_CARDS,
  TABLET_SCREEN_WIDTH,
  TABLET_SHOWCARD_STEP
} from '../../utils/constants';

let moreStep = (window.innerWidth > DESKTOP_SCREEN_WIDTH)
  ? DESKTOP_SHOWCARD_STEP
  : TABLET_SHOWCARD_STEP;

let amountShowCards = (window.innerWidth > DESKTOP_SCREEN_WIDTH)
  ? DESKTOP_AMOUNT_CARDS
  : ((window.innerWidth > TABLET_SCREEN_WIDTH)
    ? TABLET_AMOUNT_CARDS
    : MOBILE_AMOUNT_CARDS);

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
    const currentWidth = window.innerWidth;
    moreStep = currentWidth > DESKTOP_SCREEN_WIDTH ? DESKTOP_SHOWCARD_STEP : TABLET_SHOWCARD_STEP;
    amountShowCards = currentWidth > DESKTOP_SCREEN_WIDTH ?
      DESKTOP_AMOUNT_CARDS :
      (currentWidth > TABLET_SCREEN_WIDTH ? TABLET_AMOUNT_CARDS : MOBILE_AMOUNT_CARDS)
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
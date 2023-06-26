import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ movie }) {
  const { image, nameRU, duration, trailerLink } = movie;
  const isSaved = false;
  const location = useLocation();


  return (
    <article className='movies-card'>
      {location.pathname === '/movies'
        ? (<button className={`movies-card__btn movies-card__btn${isSaved ? '_nosave' : '_save'}`} type='button' >{!isSaved && 'Сохранить'}</button>)
        : (<button className={`movies-card__btn movies-card__btn_del`} type='button'></button>)
      }
      <a className='movies-card__picture-link' href={trailerLink} target='_blank' rel='noreferrer'>
        <img className='movies-card__picture' src={`https://api.nomoreparties.co/${image.url}`} alt={`Постер фильма ${movie.nameRU}`} />
      </a>
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{nameRU}</h2>
        <span className='movies-card__duration'>{duration}</span>
      </div>
    </article>
  )
}

export default MoviesCard;
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard(props) {
  const { picture, title, duration, trailerLink } = props;
  const isSaved = false;
  const location = useLocation();


  return (
    <article className='movies-card'>
      {location.pathname === '/movies'
        ? (<button className={`movies-card__btn movies-card__btn${isSaved ? '_nosave' : '_save'}`} type='button' >{!isSaved && 'Сохранить'}</button>)
        : (<button className={`movies-card__btn movies-card__btn_del`} type='button'></button>)
      }
      <a className='movies-card__picture-link' href={trailerLink} target='_blank' rel='noreferrer'>
      <img className='movies-card__picture' src={picture} alt={picture.name} />
      </a>
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{title}</h2>
        <span className='movies-card__duration'>{duration}</span>
      </div>
    </article>
  )
}

export default MoviesCard;
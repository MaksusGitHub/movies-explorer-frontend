// import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard(props) {
  const { picture, title, duration } = props;
  const isSaved = false;
  const variable = false;
  // const location = useLocation();


  return (
    <article className='movies-card'>
      {/* {location.pathname === '/movies' */}
      {isSaved === false
        ? (<button className={`movies-card__btn movies-card__btn${isSaved ? '_save' : '_nosave'}`} type='button' >{variable && 'Сохранить'}</button>)
        : (<button className={`movies-card__btn movies-card__btn_del`} type='button'></button>)
      }
      <img className='movies-card__picture' src={picture} alt={picture.name} />
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{title}</h2>
        <span className='movies-card__duration'>{duration}</span>
      </div>
    </article>
  )
}

export default MoviesCard;
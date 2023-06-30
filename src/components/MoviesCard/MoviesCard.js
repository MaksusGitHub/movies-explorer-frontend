import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ movie, onAddMovie, onDeleteMovie }) {
  const { image, nameRU, duration, trailerLink, isSaved } = movie;
  const location = useLocation();

  function getDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours ? `${hours}ч` : ''} ${minutes}м`.trim()
  }

  const handleAddMovie = () => {
    onAddMovie(movie);
  }

  const handleDeleteMovie = () => {
    if (location.pathname === '/movies') {
      onDeleteMovie(movie.savedId);
    } else {
      onDeleteMovie(movie._id);
    }
  }


  return (
    <article className='movies-card'>
      {location.pathname === '/movies'
        ? (<button className={`movies-card__btn movies-card__btn${isSaved ? '_nosave' : '_save'}`} type='button' onClick={isSaved ? handleDeleteMovie : handleAddMovie} >{!isSaved && 'Сохранить'}</button>)
        : (<button className={`movies-card__btn movies-card__btn_del`} type='button' onClick={handleDeleteMovie}></button>)
      }
      <a className='movies-card__picture-link' href={trailerLink} target='_blank' rel='noreferrer'>
        <img className='movies-card__picture' src={location.pathname === '/movies' ? `https://api.nomoreparties.co/${image.url}` : image} alt={`Постер фильма ${movie.nameRU}`} />
      </a>
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{nameRU}</h2>
        <span className='movies-card__duration'>{getDuration(duration)}</span>
      </div>
    </article>
  )
}

export default MoviesCard;
import { Link } from 'react-router-dom';

import './NotFound.css'

function NotFound() {
  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
      </div>
      <Link className='not-found__link' to='/'>
        <button className='not-found__btn'>Назад</button>
      </Link>
    </section>
  )
}

export default NotFound;
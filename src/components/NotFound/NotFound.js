import { useNavigate } from 'react-router-dom';

import './NotFound.css'

function NotFound() {
  const navigate = useNavigate();
  return (
    <main>
      <section className='not-found'>
        <div className='not-found__container'>
          <h1 className='not-found__title'>404</h1>
          <p className='not-found__subtitle'>Страница не найдена</p>
        </div>
        <button type='button' className='not-found__btn not-found__link' onClick={() => navigate(-1)}>Назад</button>
      </section>
    </main>
  )
}

export default NotFound;
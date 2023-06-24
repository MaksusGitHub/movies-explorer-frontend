import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio root__content'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://github.com/MaksusGitHub/how-to-learn' target='_blank' rel='noreferrer'>Статичный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://maksusgithub.github.io/russian-travel' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://maksus.mesto.nomoredomains.monster' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
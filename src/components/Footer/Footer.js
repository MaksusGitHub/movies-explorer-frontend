import './Footer.css';

function Footer() {
  const currentYear = new Date();

  return (
    <footer className='footer root__content'>
      <p className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <ul className='footer__links'>
          <li><a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel='noreferrer'>Яндекс.Практикум</a></li>
          <li><a className='footer__link' href='https://github.com/MaksusGitHub' target='_blank' rel='noreferrer'>Github</a></li>
        </ul>
        <p className='footer__copyright'>&copy;{currentYear.getFullYear()}</p>
      </div>
    </footer>
  )
};

export default Footer;
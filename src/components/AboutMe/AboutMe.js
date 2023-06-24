import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me root__content">
      <h2 className='section-title'>Студент</h2>
      <div className='about-me__container'>
        <article>
          <h3 className='about-me__title'>Виталий</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__info'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className='about-me__links'>
            <li><a className='about-me__link' href='https://github.com/MaksusGitHub' target='_blank' rel='noreferrer'>Github</a></li>
          </ul>
        </article>
        <img className='about-me__avatar' src={avatar} alt='Аватар' />
      </div>
    </section>
  )
}

export default AboutMe;
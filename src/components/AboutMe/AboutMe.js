import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me root__content">
      <h2 className='section-title'>Студент</h2>
      <div className='about-me__container'>
        <article>
          <h3 className='about-me__title'>Максим</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 26 лет</p>
          <p className='about-me__info'>Хочу активно развиваться в направлении веб-разработки, получая опыт в компании на коммерческих проектах. Веб-разработка привлекает возможностью создавать сайты и сервисы, которые помогают людям решать их повседневные задачи и улучшают опыт взаимодействия.
Есть небольшой учебный опыт программирования на языке C#. Закончил курс по разработке на JavaScript (React, Node). Из ресурсов предпочитаю книги. Также очень хорошо владею английским языком, как устным, так и письменным, что позволяет мне без труда читать литературу в оригинале.
В разработке привлекает возможность постоянно узнавать что-то новое. Сфера поощряет моё стремление к самообразованию и постоянному профессиональному росту.</p>
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
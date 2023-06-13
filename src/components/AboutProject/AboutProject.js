import './AboutProject.css'

function AboutProject() {
  return (
    <section className='about-project root__content'>
      <h2 className='section-title'>О проекте</h2>
      <div className='about-project__container'>
        <article>
          <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article>
          <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className='about-project__period-container'>
        <figure className='about-project__period about-project__period_size_small'>
          <p className='about-project__period-value about-project__period-value_color_green'>1 неделя</p>
          <figcaption className='about-project__period-caption'>Back-end</figcaption>
        </figure>
        <figure className='about-project__period about-project__period_size_big'>
          <p className='about-project__period-value about-project__period-value_color_gray'>4 недели</p>
          <figcaption className='about-project__period-caption'>Front-end</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default AboutProject;
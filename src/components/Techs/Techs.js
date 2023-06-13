import './Techs.css';

function Techs() {
  return (
    <section className='techs root__content'>
      <h2 className='section-title'>Технологии</h2>
      <div className='techs__container'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__list'>
          <li><a className='techs__element' href='https://developer.mozilla.org/ru/docs/Web/HTML' target='_blank' rel='noreferrer'>HTML</a></li>
          <li><a className='techs__element' href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel='noreferrer'>CSS</a></li>
          <li><a className='techs__element' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noreferrer'>JS</a></li>
          <li><a className='techs__element' href='https://react.dev/' target='_blank' rel='noreferrer'>React</a></li>
          <li><a className='techs__element' href='https://git-scm.com/' target='_blank' rel='noreferrer'>Git</a></li>
          <li><a className='techs__element' href='https://expressjs.com/' target='_blank' rel='noreferrer'>Express.js</a></li>
          <li><a className='techs__element' href='https://www.mongodb.com/' target='_blank' rel='noreferrer'>mongoDB</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;
import './Promo.css'

function Promo() {
  return (
    <section className='promo root__content'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a href='#about-project' className='promo__link'>Узнать больше</a>
      </div>
    </section>
  )
}

export default Promo;
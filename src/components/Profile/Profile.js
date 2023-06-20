import './Profile.css'

function Profile() {
  const name = 'Виталий';
  const email = 'pochta@yandex.ru';

  return (
    <section className='profile root__content'>
      <form className='profile__form'>
        <div className='profile__info'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <fieldset className='profile__fieldset'>
            <label className='profile__field'>
              <p className='profile__field-name'>Имя</p>
              <input
                className='profile__input profile__input_type_name'
                value={name}
              />
              <span className='profile__error'></span>
            </label>
            <label className='profile__field'>
            <p className='profile__field-name'>E-mail</p>
              <input
                className='profile__input profile__input_type_email'
                value={email}
              />
              <span className='profile__error'></span>
            </label>
          </fieldset>
        </div>
        <div className='profile__options'>
          <button className='profile__edit-btn'>Редактировать</button>
          <button className='profile__exit-btn'>Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  )
}

export default Profile;
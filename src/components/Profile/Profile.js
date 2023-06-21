import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Profile.css'

function Profile() {
  const [user, setUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  })
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <section className='profile root__content'>
      <form className='profile__form'>
        <div className='profile__info'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <fieldset className='profile__fieldset'>
            <label className='profile__field'>
              <p className='profile__field-name'>Имя</p>
              {
                isEdit ?
                  (
                    <input
                      className='profile__input profile__input_type_name'
                      name='name'
                      value={user.name}
                      onChange={handleChange}
                    />
                  ) : (
                    <p className='profile__text'>{user.name}</p>
                  )
              }
              <span className='profile__error'></span>
            </label>
            <label className='profile__field'>
              <p className='profile__field-name'>E-mail</p>
              {
                isEdit ?
                  (
                    <input
                      className='profile__input profile__input_type_email'
                      name='email'
                      value={user.email}
                      onChange={handleChange}
                    />
                  ) : (
                    <p className='profile__text'>{user.email}</p>
                  )
              }
              <span className='profile__error'></span>
            </label>
          </fieldset>
        </div>
        <div className='profile__options'>
          {isEdit ? (
            <>
              <p className='profile__error'></p>
              <button className='profile__save-btn' type='submit'>Сохранить</button>
            </>
          ) : (
            <>
              <button className='profile__edit-btn' type='button' onClick={() => setIsEdit(true)}>Редактировать</button>
              <Link className='profile__exit-link' to='/'>
                <button className='profile__exit-btn' type='button'>Выйти из аккаунта</button>
              </Link>
            </>
          )}
        </div>
      </form>
    </section>
  )
}

export default Profile;
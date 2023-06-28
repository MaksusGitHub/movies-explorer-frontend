import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm'
import './Register.css'

function Register({ onSubmit }) {

  const [formValue, setFormValue] = useState({ name: '', password: '', email: '' });



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = () => {
    onSubmit(formValue);
  }

  return (
    <main>
      <AuthForm
        title='Добро пожаловать!'
        btnName='Зарегистрироваться'
        help='Уже зарегистрированы?'
        linkName='Войти'
        path='/signin'
        onSubmit={handleSubmit}
      >
        <fieldset className='auth-form__fieldset'>
          <label className='auth-form__field'>
            Имя
            <input
              className='auth-form__input'
              name='name'
              type='text'
              value={formValue.name}
              onChange={handleChange}
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className='auth-form__error'></span>
          </label>
          <label className='auth-form__field'>
            E-mail
            <input
              className='auth-form__input'
              name='email'
              type='email'
              value={formValue.email}
              onChange={handleChange}
              placeholder="E-mail"
              minLength="8"
              maxLength="30"
              required
            />
            <span className='auth-form__error'></span>
          </label>
          <label className='auth-form__field'>
            Пароль
            <input
              className='auth-form__input'
              name='password'
              type="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="Пароль"
              required
            />
            <span className='auth-form__error'></span>
          </label>
        </fieldset>
      </AuthForm>
    </main>
  )
}

export default Register;
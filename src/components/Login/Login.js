import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css'

function Login({ onSubmit }) {

  const [formValue, setFormValue] = useState({ password: '', email: '' });

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
        title='Рады видеть!'
        btnName='Войти'
        help='Ещё не зарегистрированы?'
        linkName='Регистрация'
        path='/signup'
        onSubmit={handleSubmit}
      >
        <fieldset className='auth-form__fieldset auth-form__fieldset_login'>
          <label className='auth-form__field'>
            E-mail
            <input
              className='auth-form__input'
              name='email'
              type='email'
              value={formValue.email}
              onChange={handleChange}
              placeholder='E-mail'
              required
            />
            <span className='auth-form__error'></span>
          </label>
          <label className='auth-form__field'>
            Пароль
            <input
              className='auth-form__input'
              name='password'
              type='password'
              value={formValue.password}
              onChange={handleChange}
              placeholder='Пароль'
              minLength="8"
              maxLength="30"
              required
            />
            <span className='auth-form__error'></span>
          </label>
        </fieldset>
      </AuthForm>
    </main>
  )
}

export default Login;
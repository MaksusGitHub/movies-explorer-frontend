import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm'
import './Register.css'
import { EMAIL_REG } from '../../utils/constants';

function Register({ onSubmit }) {

  const [formValue, setFormValue] = useState({ name: '', password: '', email: '' });
  const [isValid, setIsValid] = useState({});
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
    handleValidation(name, value);
  }

  const handleSubmit = () => {
    onSubmit(formValue);
  }

  const handleValidation = (name, value) => {
    if (name === 'name') {
      if (value.length > 2 && value.length <= 30) {
        setIsValid({ ...isValid, name: true })
        setErrors({ ...errors, name: '' })
      } else {
        setIsValid({ ...isValid, name: false })
        setErrors({ ...errors, name: 'Имя должно быть длиннее 2 символов, но менее 30' })
      }
    } else if (name === 'email') {
      if (EMAIL_REG.test(value)) {
        setIsValid({ ...isValid, email: true })
        setErrors({ ...errors, email: '' })
      } else {
        setIsValid({ ...isValid, email: false })
        setErrors({ ...errors, email: 'Введите E-mail' })
      }
    } else if (name === 'password') {
      if (value.length >= 8) {
        setIsValid({ ...isValid, password: true })
        setErrors({ ...errors, password: '' })
      } else {
        setIsValid({ ...isValid, password: false })
        setErrors({ ...errors, password: 'Пароль должен быть длиннее 8 символов' })
      }
    }  
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
        isValid={isValid}
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
            <span className='auth-form__error'>{errors.name}</span>
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
            <span className='auth-form__error'>{errors.email}</span>
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
            <span className='auth-form__error'>{errors.password}</span>
          </label>
        </fieldset>
      </AuthForm>
    </main>
  )
}

export default Register;
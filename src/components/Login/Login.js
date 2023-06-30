import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css'
import { EMAIL_REG } from '../../utils/constants';

function Login({ onSubmit }) {

  const [formValue, setFormValue] = useState({ password: '', email: '' });
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
    if (name === 'email') {
      if(EMAIL_REG.test(value)) {
        setIsValid({...isValid, email: true})
        setErrors({...errors, email: ''})
      } else {
        setIsValid({...isValid, email: false})
        setErrors({...errors, email: 'Введите E-mail'})
      }
    } else if (name === 'password') {
      if(value.length >= 8) {
        setIsValid({...isValid, password: true})
        setErrors({...errors, password: ''})
      } else {
        setIsValid({...isValid, password: false})
        setErrors({...errors, password: 'Пароль должен быть длиннее 8 символов'})
      }
    }
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
        isValid={isValid}
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
            <span className='auth-form__error'>{errors.email}</span>
          </label>
          <label className='auth-form__field'>
            Пароль
            <input
              className={`auth-form__input ${!isValid.password && 'auth-form__input_novalid'}`}
              name='password'
              type='password'
              value={formValue.password}
              onChange={handleChange}
              placeholder='Пароль'
              minLength="8"
              maxLength="30"
              required
            />
            <span className='auth-form__error'>{errors.password}</span>
          </label>
        </fieldset>
      </AuthForm>
    </main>
  )
}

export default Login;
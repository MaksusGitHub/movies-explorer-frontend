import AuthForm from '../AuthForm/AuthForm'
import './Register.css'

function Register() {

  return (
    <AuthForm
      title='Добро пожаловать!'
      btnName='Зарегистрироваться'
      help='Уже зарегистрированы?'
      link='Войти'
    >
      <fieldset className='auth-form__fieldset'>
        <label className='auth-form__field'>
          Имя
          <input
            className='auth-form__input'
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
            type='email'
            placeholder="E-mail"
            required
          />
          <span className='auth-form__error'></span>
        </label>
        <label className='auth-form__field'>
          Пароль
          <input
            className='auth-form__input'
            type="password"
            placeholder="Пароль"
            required
          />
          <span className='auth-form__error'></span>
        </label>
      </fieldset>
    </AuthForm>
  )
}

export default Register;
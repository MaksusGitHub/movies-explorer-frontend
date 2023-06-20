import AuthForm from '../AuthForm/AuthForm';
import './Login.css'

function Login() {
  return (
    <AuthForm
      title='Рады видеть!'
      btnName='Войти'
      help='Ещё не зарегистрированы?'
      linkName='Регистрация'
      path='/signup'
    >
      <fieldset className='auth-form__fieldset'>
        <label className='auth-form__field'>
          E-mail
          <input
            className='auth-form__input'
          />
          <span className='auth-form__error'></span>
        </label>
        <label className='auth-form__field'>
          Пароль
          <input
            className='auth-form__input'
          />
          <span className='auth-form__error'></span>
        </label>
      </fieldset>
    </AuthForm>
  )
}

export default Login;